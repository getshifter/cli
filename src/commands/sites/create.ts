import {flags} from '@oclif/command'
import cli from 'cli-ux'
import {AbstractCommand} from '../../share/abstract.command'
import {APIClientService} from '../../share/api/api.service'

export default class SitesCreateCommand extends AbstractCommand {
  static description = 'Create a new site'

  static examples = [
    'Simple usage',
    '$ shifter sites:create --username USERNAME --password PASSWORD --site-name "Name of site"',
  ];

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
    'site-name': flags.string({
      char: 'S',
      description: 'Shifter site name',
    }),
    'plan-id': flags.string({
      description: 'Shifter plan id',
    }),
  };

  async run() {
    const {flags} = this.parse(SitesCreateCommand)
    try {
      const clientWithAuth = await this.setupApiClient(
        flags.username,
        flags.password,
        flags.verbose,
        flags.development,
      )
      const siteName = flags['site-name'] || (await cli.prompt('Site name'))
      const planId = flags['plan-id'] || 'free'
      await clientWithAuth.post('/latest/sites', {
        site_name: siteName,
        plan_id: planId,
      })
    } catch (error) {
      if (APIClientService.isAxiosError(error) && error.response) {
        const response = error.response
        this.error(
          `${response.status} - ${response.statusText}\n${response.data.message}`,
        )
      }
      this.error(error)
    }
  }
}
