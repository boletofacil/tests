import axios, { AxiosInstance } from 'axios'
import md5 from 'md5'
import env from '../config/env'

class MarvelApi {
  private limit: number

  private http: AxiosInstance

  constructor() {
    const timestamp = Number(new Date())
    const publicKey = env.publicKey()
    const privateKey = env.privateKey()
    const hashKey = md5(timestamp + privateKey + publicKey)

    this.limit = 20
    this.http = axios.create({
      baseURL: 'https://gateway.marvel.com/v1/public/',
      params: {
        limit: this.limit,
        apikey: publicKey,
        hash: hashKey,
        ts: timestamp,
      },
    })
  }

  public search(search: string, page = 1) {
    const offset = (page * this.limit) - this.limit

    return this.http.get('characters', {
      params: {
        ...this.http.defaults.params,
        nameStartsWith: search,
        offset,
      },
    })
  }
}

export const marvelApi = new MarvelApi()
export default marvelApi
