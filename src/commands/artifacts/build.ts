import {flags} from '@oclif/command'
import cli from 'cli-ux'
import {AbstractCommand} from '../../share/abstract.command'
import {APIClientService} from '../../share/api/api.service'

export default class ArtifactsBuildCommand extends AbstractCommand {
  static description = 'Artifacts build command'

  static examples = [
    'Simple usage',
    '$ shifter artifacts:build --username USERNAME --password PASSWORD --site-id xxx-YOUR-SITE-ID-xxxx',
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
    'site-id': flags.string({
      char: 'S',
      description: 'Shifter site id',
    }),
  };

  async run() {
    const {flags} = this.parse(ArtifactsBuildCommand)
    try {
      const clientWithAuth = await this.setupApiClient(
        flags.username,
        flags.password,
        flags.verbose,
        flags.development,
      )
      const siteId = flags['site-id'] || (await cli.prompt('Site id'))
      await clientWithAuth.post(`/latest/sites/${siteId}/artifacts`)
      const validationDetail = await clientWithAuth.get(
        `/latest/sites/${siteId}/artifacts`,
      )
      this.log(JSON.stringify(validationDetail, null, 2))
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
