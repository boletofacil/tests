import { FormEvent, useState } from 'react'
import './styles.scss'

interface SearchBoxProps {
  submitSearch: (search: string) => any
}

function SearchBox({ submitSearch }: SearchBoxProps) {
  const [search, setSearch] = useState('')

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    submitSearch(search)
  }

  return (
    <form className="px-2 pt-4 pb-2" onSubmit={handleSubmit} role="search">
      <div id="search-box" className="form-group">
        <label htmlFor="search-box" className="h5">
          Start typing the name of your character:
        </label>
        <div className="row align-middle px-2">
          <input
            id="search-input"
            type="text"
            className="form-control border-marvel col-10 col-lg-11 rounded-0"
            placeholder='e.g.: "captain"'
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            autoFocus
          />
          <input
            type="submit"
            className="btn btn-marvel col-2 col-lg-1 rounded-0"
            disabled={!search}
            value="GO"
          />
        </div>
      </div>
    </form>
  )
}

export default SearchBox
