import {flags} from '@oclif/command'
import {AbstractCommand} from '../../share/abstract.command'
import {APIClientService} from '../../share/api/api.service'

export default class DomainList extends AbstractCommand {
  static description = 'Sites lists command';

  static examples = [
    'Simple usage',
    '$ shifter sites:list --username USERNAME --password PASSWORD',
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
  };

  async run() {
    const {flags} = this.parse(DomainList)
    try {
      const clientWithAuth = await this.setupApiClient(
        flags.username,
        flags.password,
        flags.verbose,
        flags.development,
      )
      const sites = await clientWithAuth.get(
        '/latest/sites',
      )
      this.log(
        JSON.stringify(
          sites,
          null,
          2,
        ),
      )
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
