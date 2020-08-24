import React, { useReducer } from 'react'
import './styles.scss'

interface PaginationProps {
  goToPage: (page: number) => any
  currentPage: number
  response: any
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, response, goToPage }) => {
  const [, forceUpdate] = useReducer((x: number) => x + 1, 0)

  function requestPrevious() {
    goToPage(currentPage - 1)
    forceUpdate()
  }

  function requestNext() {
    goToPage(currentPage + 1)
    forceUpdate()
  }

  function hasPrevious() {
    const style: any = { width: '5em' }
    if (currentPage === 1) {
      style.visibility = 'hidden'
    }
    return (
      <button
        type="button"
        className="btn btn-outline-marvel"
        style={style}
        onClick={requestPrevious}
      >Previous</button>
    )
  }

  function hasNext() {
    const { limit, total } = response
    const lastPage = Math.ceil(total / limit)
    const style: any = { width: '5em' }
    if (currentPage === lastPage) {
      style.visibility = 'hidden'
    }
    return (
      <button
        type="button"
        className="btn btn-outline-marvel"
        style={style}
        onClick={requestNext}
      >Next</button>
    )
  }

  return (
    <div className="mt-2 mb-3 d-flex justify-content-between">
      {hasPrevious()}
      {hasNext()}
    </div>
  )
}

export default Pagination
