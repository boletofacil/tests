import React from 'react'
import SearchBox from '../SearchBox'
import Content from '../Content'
import loading from '../../assets/images/loading.gif'
import './styles.scss'

interface MainProps {
  submitSearch: (search: string) => any
  goToPage: (page: number) => any
  currentPage: number
  isLoaded: boolean
  loading: boolean
  response: any
}

const Main: React.FC<MainProps> = (props) => {

  function displayResults() {
    if (props.isLoaded) {
      if (props.loading) {
        return (
          <React.Fragment>
            <hr/>
            <div className="text-center py-5">
              <img src={loading} alt="Loading animation" aria-label="Loading animation" />
            </div>
          </React.Fragment>
        )
      }
      return (
        <React.Fragment>
          <hr/>
          <Content
            response={props.response}
            currentPage={props.currentPage}
            submitSearch={props.submitSearch}
            goToPage={props.goToPage}
          />
        </React.Fragment>
      )
    }
  }

  return (
    <div className="container-fluid py-5">
      <div className="container bg-white">
        <SearchBox submitSearch={props.submitSearch} />
        {displayResults()}
      </div>
    </div>
  )
}

export default Main
