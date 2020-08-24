import React, { useState } from 'react'
import Record from '../Record'
import Details from '../Details'
import Pagination from '../Pagination'
import './styles.scss'

interface ContentProps {
  submitSearch: (search: string) => {}
  goToPage: (page: number) => {}
  currentPage: number
  response: any
}

const Content: React.FC<ContentProps> = (props) => {
  const [, setIsShowingDetails] = useState(false)
  const [detailsFor, setDetailsFor] = useState(null)

  function toggleDetails(record: any = null) {
    setIsShowingDetails(Boolean(record))
    setDetailsFor(record)
  }

  function hasPages() {
    if (props.response.total > props.response.limit) {
      return (
        <Pagination
          response={props.response}
          currentPage={props.currentPage}
          goToPage={props.goToPage}
        />
      )
    }
  }

  function getDetails() {
    if (detailsFor) {
      return (
        <Details character={detailsFor} hideDetails={toggleDetails} />
      )
    }
  }

  return (
    <div className="pb-4">
      {hasPages()}
      <div className="row">
        {props.response.results.map((record: any) => (
          <Record
            key={record.id}
            data={record}
            showDetails={toggleDetails}
          />
        ))
      }
      </div>
      {hasPages()}
      {getDetails()}
    </div>
  )
}

export default Content
