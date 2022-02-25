import { useState } from 'react'

import loadingSpinner from '../assets/images/loading.gif'
import marvel from '../services/marvelApi'
import CharactersList from './CharactersList'
import Header from './Header'
import SearchBox from './SearchBox'

function App() {
  const [metadata, setMetadata] = useState({})
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [lastSearch, setLastSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const submitSearch = async (search: string, page = 1) => {
    setLoading(true)
    setCurrentPage(page)
    setLastSearch(search)

    try {
      const { data } = await marvel.search(search, page)
      const { results, ...responseMetadata } = data
      setMetadata(responseMetadata)
      setCharacters(results)
    } catch (ex) {
      console.error(ex) // eslint-disable-line no-console
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <div className="container-fluid py-5">
        <div className="container bg-white">
          <SearchBox submitSearch={submitSearch} />

          <div className={loading || characters.length ? 'd-block' : 'd-none'}>
            <hr />

            {loading ? (
              <div className="text-center py-5">
                <img src={loadingSpinner} alt="Loading animation" />
              </div>
            ) : (
              <CharactersList
                metadata={metadata}
                characters={characters}
                currentPage={currentPage}
                goToPage={(page: number) => submitSearch(lastSearch, page)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
