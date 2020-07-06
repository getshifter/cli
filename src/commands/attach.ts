import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import axios, { AxiosError } from 'axios'

/**
 * Join url path
 * @param paths
 */
const pathJoin = (...paths: string[]): string => {
  const url = paths.map((path) => path.replace(/^\//, '').replace(/\/$/, ''));
  return url.join('/');
};

/**
 * GET Shifter API endpoint
 * @param env
 * @param path
 */
const getEndpoint = (isDevelopment: boolean = false): string => {
  const url = !isDevelopment ? 'https://api.getshifter.io' : 'https://devapi.getshifter.io';
  return url;
};

const isAxiosError = (error: Error | AxiosError): error is AxiosError => {
  return Object.prototype.hasOwnProperty.call(error, 'isAxiosError')
}

export default class Attach extends Command {
  static description = 'Domain attach command'

  static examples = [
    `Simply usage`,
    `$ shifter-domain attach --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx  --domain test.example.com`,
    `\n Use own CDN (Netlify or own CloudFront etc...)`,
    `$ shifter-domain attach --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx  --domain test.example.com --no-shifter-cdn`,
  ]

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    username: flags.string({
      char: 'U',
      description: 'Shifter username'
    }),
    password: flags.string({
      hidden: true,
      char: 'P',
      description: 'Shifter password'
    }),
    domain: flags.string({
      char: 'D',
      description: 'Target domain name (eg. www.example.com)'
    }),
    "site-id": flags.string({
      char: 'S',
      description: 'Shifter site id'
    }),
    development: flags.boolean({
      description: 'Work as development mode (Only for Shifter developer team)',
      default: false,
    }),
    "no-shifter-cdn": flags.boolean({
      description: "If you using another CDN like Netlify or own CloudFront etc... Please set the flag.",
      default: false
    })
  }

  async run() {
    const {flags} = this.parse(Attach)
    const username = flags.username || await cli.prompt('Shifter username')
    const password = flags.password || await cli.prompt('Shifter password', {type: 'hide'})
    const siteId = flags["site-id"] || await cli.prompt('Site id')
    const domain = flags.domain || await cli.prompt('Target domain')
    const development = flags.development === true
    const noShifterCDN = flags["no-shifter-cdn"] === false
    if (development) this.log('Work as development mode')
    try {
      const endpoint = getEndpoint(development)
      const loginUrl = pathJoin(endpoint, '/latest/login')
      const loginResult = await axios.post(loginUrl, {
        username,
        password
      })
      const accessToken = loginResult.data.AccessToken
      if (!accessToken) throw new Error('Failed to get the access token. Please try again.')
      const { data: site } = await axios.get(pathJoin(endpoint, `/latest/sites/${siteId}`), {
        headers: {
          Authorization: accessToken
        }
      })
      if (!site || site.project_id !== siteId) throw new Error(`No such site ${siteId}`)
      const {data: domainObj} = await axios.get(pathJoin(endpoint, `/latest/sites/${siteId}/domains/${domain}`), {
        headers: {
          Authorization: accessToken
        }
      })
      if (!domainObj) throw new Error(`No such domain ${domain}`)
      if (domainObj.status !== 'ISSUED') throw new Error('The domain has not been veritied. Please wait for a while and try again.')
      await axios.post(pathJoin(endpoint, `/latest/sites/${siteId}/domains/${domain}/attach`), {
        use_shifter_domain: !noShifterCDN
      }, {
        headers: {
          Authorization: accessToken
        }
      })
      this.log(`Domain has been assigned`)
    } catch (e) {
      if (isAxiosError(e) && e.response) {
        const response = e.response
        if (development) console.log(response)
        this.error(`${response.status} - ${response.statusText}\n${response.data.message}`)
      }
      if (development) console.log(e)
      this.error(e)
    }
  }
}
