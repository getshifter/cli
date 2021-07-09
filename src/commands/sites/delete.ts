import {flags} from '@oclif/command'
import cli from 'cli-ux'
import {APIClientService} from '../../share/api/api.service'
import {AbstractCommand} from '../../share/abstract.command'

export default class SitesDeleteCommand extends AbstractCommand {
  static description = 'Sites delete command'

  static examples = [
    'Simple usage',
    '$ shifter sites:delete --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx',
  ]

  static flags = {
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    development: flags.boolean({
      description: 'Work as development mode (Only for Shifter developer team)',
      default: false,
    }),
    verbose: flags.boolean({
      description: 'Show verbose',
      default: false,
    }),
    username: flags.string({
      char: 'U',
      description: 'Shifter username',
    }),
    password: flags.string({
      hidden: true,
      char: 'P',
      description: 'Shifter password',
    }),
    'site-id': flags.string({
      char: 'S',
      description: 'Shifter site id',
    }),
  }

  async run() {
    const {flags} = this.parse(SitesDeleteCommand)
    const siteId = flags['site-id'] || await cli.prompt('Site id')
    const development = flags.development === true
    if (development) this.log('Work as development mode')
    try {
      const clientWithAuth = await this.setupApiClient(flags.username, flags.password, flags.verbose, development)
      const site = await clientWithAuth.get(`/latest/sites/${siteId}`)
      if (!site || site.project_id !== siteId) throw new Error(`No such site ${siteId}`)
      await clientWithAuth.delete(`/latest/sites/${siteId}`)
      this.log('Site has been deleted')
    } catch (error) {
      if (APIClientService.isAxiosError(error) && error.response) {
        const response = error.response
        // eslint-disable-next-line  no-console
        if (development) console.log(response)
        this.error(`${response.status} - ${response.statusText}\n${response.data.message}`)
      }
      // eslint-disable-next-line  no-console
      if (development) console.log(error)
      this.error(error)
    }
  }
}
