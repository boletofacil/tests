import React, { useState, FormEvent } from 'react'
import './styles.scss'

interface SearchBoxProps {
  submitSearch: (search: string) => any
}

const SearchBox: React.FC<SearchBoxProps> = (props) => {
  const [search, setSearch] = useState('')

  function onSubmit(ev: FormEvent) {
    ev.preventDefault()
    props.submitSearch(search)
  }

  return (
    <form role="search" className="px-2 pt-4 pb-2" onSubmit={onSubmit}>
      <div id="search-box" className="form-group">
        <label htmlFor="search-box" className="h5">
          Start typing the name of your character:
        </label>
        <div className="row align-middle px-2">
          <input
            id="search-input"
            type="text"
            className="form-control border-marvel col-10 col-lg-11 rounded-0"
            placeholder="e.g.: &quot;captain&quot;"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            autoFocus
          />
          <button type="submit" className="btn btn-marvel col-2 col-lg-1 rounded-0">
            GO
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBox
