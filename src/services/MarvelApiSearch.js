import axios from 'axios'
import md5 from 'md5'
import env from './../config/env'

/**
 * Define the HTTP client to consume Marvel API
 */
function MarvelApiSearch() {
  const timestamp = Number(new Date())
  const limit = 20
  const http = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
  })
  this.search = (search, page = 1) => {
    const offset = (page * limit) - limit
    return http.get('characters', {
      params: {
        nameStartsWith: search,
        ts: timestamp,
        apikey: env.publicKey(),
        hash: md5(timestamp + env.privateKey() + env.publicKey()),
        limit, offset
      }
    })
  }
}

export default new MarvelApiSearch()
