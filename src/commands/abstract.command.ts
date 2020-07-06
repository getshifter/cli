import {Command} from '@oclif/command'
import {APIClientWithAuthService, APIClientService} from '../share/api/api.service'

export abstract class AbstractCommand extends Command {
  protected async setupApiClient(username: string, password: string, showVerbose = false, development = false): Promise<APIClientWithAuthService> {
    const client = new APIClientService(showVerbose, development)
    const loginResult = await client.post('/latest/login', {
      username,
      password,
    })
    const accessToken = loginResult.AccessToken
    if (!accessToken) throw new Error('Failed to get the access token. Please try again.')
    return new APIClientWithAuthService(accessToken, showVerbose, development)
  }

  abstract async run(): Promise<void>
}
