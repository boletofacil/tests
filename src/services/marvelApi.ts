import md5 from 'md5'

class MarvelApi {
  private baseURL: string
  private limit: number
  private params: Record<string, string | number>

  private getURI(uri: string, params: Record<string, string | number> = {}) {
    const allParams = { ...this.params, ...params }
    const queryString = Object.entries(allParams)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')

    return `${this.baseURL}/${uri}?${queryString}`
  }

  constructor() {
    const timestamp = Number(new Date())
    const publicKey = process.env.REACT_APP_API_PUBLIC_KEY as string
    const privateKey = process.env.REACT_APP_API_PRIVATE_KEY as string
    const hashKey = md5(timestamp + privateKey + publicKey)

    this.baseURL = process.env.REACT_APP_API_URL as string
    this.limit = 20
    this.params = {
      limit: this.limit,
      apikey: publicKey,
      hash: hashKey,
      ts: timestamp,
    }
  }

  public search(search: string, page = 1) {
    const offset = page * this.limit - this.limit

    return fetch(
      this.getURI('characters', {
        nameStartsWith: search,
        offset,
      }),
    ).then((response) => response.json())
  }
}

export const marvelApi = new MarvelApi()
export default marvelApi
