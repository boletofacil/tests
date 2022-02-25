import { useReducer } from 'react'
import './styles.scss'

interface PaginationProps {
  goToPage: (page: number) => any
  displayCounter?: boolean
  current: number
  total: number
  limit: number
}

function Pagination({ goToPage, displayCounter, current, total, limit }: PaginationProps) {
  const [, forceUpdate] = useReducer((x: number) => x + 1, 0)

  const last = Math.ceil(total / limit)

  function goToPrevious() {
    goToPage(current - 1)
    forceUpdate()
  }

  function goToNext() {
    goToPage(current + 1)
    forceUpdate()
  }

  return (
    <div className="d-flex justify-content-between mt-2 mb-3">
      <button
        type="button"
        className="btn btn-outline-marvel page-nav-btn"
        onClick={goToPrevious}
        style={{ visibility: current === 1 ? 'hidden' : 'visible' }}
      >
        Previous
      </button>

      {!displayCounter || (
        <span>
          Page {current} of {last}
        </span>
      )}

      <button
        type="button"
        className="btn btn-outline-marvel page-nav-btn"
        onClick={goToNext}
        style={{ visibility: current === last ? 'hidden' : 'visible' }}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
