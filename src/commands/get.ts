import {flags} from '@oclif/command'
import cli from 'cli-ux'
import { AbstractCommand } from '../share/abstract.command'
import { APIClientService } from '../share/api/api.service'

export default class Get extends AbstractCommand {
  static description = 'Domain get command'

  static examples = [
    'Simply usage',
    '$ shifter-domain get --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx --domain test.example.com',
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
    domain: flags.string({
      char: 'D',
      description: 'target domain name (eg. example.com)'
    }),
    'site-id': flags.string({
      char: 'S',
      description: 'Shifter site id',
    }),
  }

  async run() {
    const {flags} = this.parse(Get)
    try {
      const clientWithAuth = await this.setupApiClient(flags.username, flags.password, flags.verbose, flags.development)
      const siteId = flags['site-id'] || await cli.prompt('Site id')
      const domain = flags.domain || await cli.prompt('Target domain')
      const domainDetail = await clientWithAuth.get(`/latest/sites/${siteId}/domains/${domain}`)
      if (domainDetail && domainDetail.attached_project) {
        delete domainDetail.attached_project.notification_emails
      }
      this.log(JSON.stringify(domainDetail, null, 2))
    } catch (error) {
      if (APIClientService.isAxiosError(error) && error.response) {
        const response = error.response
        this.error(`${response.status} - ${response.statusText}\n${response.data.message}`)
      }
      this.error(error)
    }
  }
}
