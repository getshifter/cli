/* eslint-disable no-console */
import axios, {AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse} from 'axios'
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

    protected _recordAxiosRequest(url: string, path: string, config?: AxiosRequestConfig, body?: object): void {
      if (!this.debugMode) return
      const request = Object.assign({}, {
        url, path, body,
      }) as any
      if (request.body && Object.keys(request.body).length > 0) {
        Object.keys(request.body).forEach(key => {
          if (!request.body[key]) return
          if (/Token/.test(key) && request.body[key]) request.body[key] = '=== SECRET ==='
          if (/password/.test(key.toLocaleLowerCase()) && request.body[key]) request.body[key] = '=== SECRET ==='
        })
      }
      console.log({
        request,
      })
    }

    protected _recordAxiosResponse<Response = any>(result: AxiosResponse<Response>): void {
      if (!this.debugMode) return
      const _target = (() => {
        if (typeof result.data !== 'object') {
          return result.data
        }
        const data = Object.assign({}, result.data) as any
        Object.keys(data).forEach(key => {
          if (/Token/.test(key) && data[key]) data[key] = '=== SECRET ==='
          if (/password/.test(key.toLocaleLowerCase()) && data[key]) data[key] = '=== SECRET ==='
        })
        return data
      })()
      console.log({
        result: _target,
      })
    }

    public async post(path: string, body?: object, config?: AxiosRequestConfig) {
      return this._post(path, body, config)
    }

    protected async _post(path: string, body?: object, config?: AxiosRequestConfig) {
      const url = pathJoin(this.endpoint, path)
      this._recordAxiosRequest(url, path, config, {...body})
      const result = await axios.post(url, body, config)
      this._recordAxiosResponse(result)
      return result.data
    }

    public async get(path: string, config?: AxiosRequestConfig) {
      return this._get(path, config)
    }

    protected async _get(path: string, config?: AxiosRequestConfig) {
      const url = pathJoin(this.endpoint, path)
      this._recordAxiosRequest(url, path, config)
      const result = await axios.get(url, config)
      this._recordAxiosResponse(result)
      return result.data
    }

    public async delete(path: string, config?: AxiosRequestConfig) {
      return this._delete(path, config)
    }

    protected async _delete(path: string, config?: AxiosRequestConfig) {
      const url = pathJoin(this.endpoint, path)
      this._recordAxiosRequest(url, path, config)
      const result = await axios.delete(url, config)
      this._recordAxiosResponse(result)
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

    public async delete(path: string, config?: AxiosRequestConfig) {
      return this._delete(path, this._putAccessTokenHeader(config))
    }
}
