import React from 'react'
import './styles.scss'

interface RecordProps {
  showDetails: (record?: any) => any
  data: any
}

const Record: React.FC<RecordProps> = ({ data, showDetails }) => (
  <div className="col-12 col-md-6">
    <div className="card mb-3 border-marvel card-record">
      <div className="card-body">
        <img
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          className="figure-fluid float-left"
          alt="Character thumbnail"
        />
        <div className="card-record-details">
          <h3 className="card-title text-truncate h5" title={data.name}>
            {data.name}
          </h3>
          <div className="card-text text-center">
            <button
              type="button"
              className="btn btn-sm btn-marvel w-50 rounded-0"
              onClick={showDetails.bind(null, data)}
            >
              More Details...
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Record
