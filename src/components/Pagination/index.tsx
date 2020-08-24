import React, { useState, useReducer } from 'react'
import './styles.scss'

interface PaginationProps {
  goToPage: (page: number) => any
  currentPage: number
  response: any
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const [currentPage, setCurrentPage] = useState(1)

  const [, forceUpdate] = useReducer((x: number) => x + 1, 0)

  function requestPrevious() {
    setCurrentPage(props.currentPage - 1)
    props.goToPage(currentPage)
    forceUpdate()
  }

  function requestNext() {
    setCurrentPage(props.currentPage + 1)
    props.goToPage(currentPage)
    forceUpdate()
  }

  function hasPrevious() {
    const style: any = { width: '5em' }
    if (props.currentPage === 1) {
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
    const { limit, total } = props.response
    const lastPage = Math.ceil(total / limit)
    const style: any = { width: '5em' }
    if (props.currentPage === lastPage) {
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
