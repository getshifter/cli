/* eslint-disable no-console */
import axios, {AxiosInstance, AxiosRequestConfig, AxiosError} from 'axios'
/**
 * GET Shifter API endpoint
 * @param env
 * @param path
 */
const getEndpoint = (isDevelopment = false): string => {
  if (isDevelopment) return 'https://devapi.getshifter.io'
  return 'https://api.getshifter.io'
}
/**
 * Join url path
 * @param paths
 */
const pathJoin = (...paths: string[]): string => {
  const url = paths.map(path => path.replace(/^\//, '').replace(/\/$/, ''))
  return url.join('/')
}

export class APIClientService {
    protected readonly client: AxiosInstance = axios

    protected endpoint: string;

    protected readonly debugMode: boolean;

    public constructor(debugMode = false, isDevelopment = false) {
      this.endpoint = getEndpoint(isDevelopment)
      this.debugMode = debugMode
    }

    public async post(path: string, body?: object, config?: AxiosRequestConfig) {
      return this._post(path, body, config)
    }

    protected async _post(path: string, body?: object, config?: AxiosRequestConfig) {
      const url = pathJoin(this.endpoint, path)
      if (this.debugMode) console.log({url, path, body, config})
      const result = await axios.post(url, body, config)
      if (this.debugMode) console.log({result})
      return result.data
    }

    public async get(path: string, config?: AxiosRequestConfig) {
      return this._get(path, config)
    }

    protected async _get(path: string, config?: AxiosRequestConfig) {
      const url = pathJoin(this.endpoint, path)
      if (this.debugMode) console.log({url, path, config})
      const result = await axios.get(url, config)
      if (this.debugMode) console.log({result})
      return result.data
    }

    public static isAxiosError(error: Error | AxiosError): error is AxiosError {
      return Object.prototype.hasOwnProperty.call(error, 'isAxiosError')
    }
}

export class APIClientWithAuthService extends APIClientService {
    private accessToken: string;

    constructor(accessToken: string, debugMode = false, isDevelopment = false) {
      super(debugMode, isDevelopment)
      this.accessToken = accessToken
    }

    private _putAccessTokenHeader(config: AxiosRequestConfig = {}) {
      if (config.headers) {
        config.headers.Authorization = this.accessToken
      } else {
        config.headers = {
          Authorization: this.accessToken,
        }
      }
      return config
    }

    public async post(path: string, body?: object, config?: AxiosRequestConfig) {
      return this._post(path, body, this._putAccessTokenHeader(config))
    }

    public async get(path: string, config?: AxiosRequestConfig) {
      return this._get(path, this._putAccessTokenHeader(config))
    }
}
