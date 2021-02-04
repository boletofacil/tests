import { FC, useReducer } from 'react'
import './styles.scss'

interface PaginationProps {
  goToPage: (page: number) => any
  displayCounter?: boolean
  current: number
  total: number
  limit: number
}

const Pagination: FC<PaginationProps> = (props) => {
  const last = Math.ceil(props.total / props.limit)

  const [, forceUpdate] = useReducer((x: number) => x + 1, 0)

  const goToPrevious = () => {
    props.goToPage(props.current - 1)
    forceUpdate()
  }

  const goToNext = () => {
    props.goToPage(props.current + 1)
    forceUpdate()
  }

  return (
    <div className="d-flex justify-content-between mt-2 mb-3">
      <button
        type="button"
        className="btn btn-outline-marvel page-nav-btn"
        onClick={goToPrevious}
        style={{ visibility: (props.current === 1) ? 'hidden' : 'visible' }}
      >Previous</button>

      <If condition={!!props.displayCounter}>
        <span>Page {props.current} of {last}</span>
      </If>

      <button
        type="button"
        className="btn btn-outline-marvel page-nav-btn"
        onClick={goToNext}
        style={{ visibility: (props.current === last) ? 'hidden' : 'visible' }}
      >Next</button>
    </div>
  )
}

export default Pagination
