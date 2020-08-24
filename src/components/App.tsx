import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'
import marvel from '../services/marvelApi'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [lastSearch, setLastSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchResponse, setSearchResponse] = useState({})

  async function submitSearch(search: string, page: number = 1) {
    setLoading(true)
    setIsLoaded(true)
    setLastSearch(search)
    setCurrentPage(page)

    try {
      const { data: { data } } = await marvel.search(search, page)
      setSearchResponse(data)
    } catch (err) {
      console.error(err)
      setIsLoaded(false)
    } finally {
      setLoading(false)
    }
  }

  function goToPage(page: number) {
    submitSearch(lastSearch, page)
  }

  return (
    <div>
      <Header />
      <Main
        loading={loading}
        isLoaded={isLoaded}
        response={searchResponse}
        currentPage={currentPage}
        submitSearch={submitSearch}
        goToPage={goToPage}
      />
    </div>
  )
}

export default App
