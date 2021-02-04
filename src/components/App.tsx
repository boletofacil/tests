import { FC, useState } from 'react'
import Header from './Header'
import SearchBox from './SearchBox'
import CharactersList from './CharactersList'
import marvel from '../services/marvelApi'
import loadingSpinner from '../assets/images/loading.gif'

const App: FC = () => {
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
      const { results, ...responseMetadata } = data.data
      setMetadata(responseMetadata)
      setCharacters(results)
    } catch (ex) {
      console.error(ex)
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

          <div className={(loading || characters.length) ? 'd-block' : 'd-none'}>
            <hr />
            <If condition={loading}>
              <div className="text-center py-5">
                <img src={loadingSpinner} alt="Loading animation" />
              </div>
            </If>

            <If condition={!loading}>
              <CharactersList
                metadata={metadata}
                characters={characters}
                currentPage={currentPage}
                goToPage={(page: number) => submitSearch(lastSearch, page)}
              />
            </If>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
