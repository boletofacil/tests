import axios, { AxiosInstance } from 'axios'
import md5 from 'md5'

class MarvelApi {
  private limit: number
  private http: AxiosInstance

  constructor() {
    const timestamp = Number(new Date())
    const publicKey = process.env.REACT_APP_API_PUBLIC_KEY as string
    const privateKey = process.env.REACT_APP_API_PRIVATE_KEY as string
    const hashKey = md5(timestamp + privateKey + publicKey)

    this.limit = 20
    this.http = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
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
