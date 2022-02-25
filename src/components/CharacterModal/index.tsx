import $ from 'jquery'
import { useEffect } from 'react'
import './styles.scss'

interface CharacterModalProps {
  hideDetails: (record?: any) => any
  character: any
}

function CharacterModal({ character, hideDetails }: CharacterModalProps) {
  useEffect(() => {
    $('#character-details').modal('show')
    $(document.body).css({
      overflow: 'auto',
      paddingRight: 0,
    })
  }, [])

  useEffect(() => {
    $('#character-details').on('hidden.bs.modal', () => {
      hideDetails()
    })
  }, [hideDetails])

  return (
    <div id="character-details" className="modal fade" role="dialog" tabIndex={1}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex flex-column align-items-center">
            <button type="button" className="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
            <figure className="figure w-50">
              <img
                className="figure-img img-fluid rounded-circle"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt="Character thumbnail"
              />
            </figure>
            <h1 className="modal-title text-center">{character.name}</h1>
          </div>

          <div className="modal-body text-center">
            <p className="h5">
              {character.description || <span className="font-italic">No description</span>}
            </p>
            <div className="d-flex justify-content-around pt-3">
              <h5>
                <span className="badge badge-primary">{character.stories.available} stories</span>
              </h5>
              <h5>
                <span className="badge badge-danger">{character.comics.available} comics</span>
              </h5>
              <h5>
                <span className="badge badge-info">{character.series.available} series</span>
              </h5>
              <h5>
                <span className="badge badge-warning">{character.events.available} events</span>
              </h5>
            </div>
          </div>

          <div className="modal-footer d-flex justify-content-between">
            <button type="button" className="btn btn-light rounded-0" data-dismiss="modal">
              Close
            </button>
            <a href={character.urls[0].url} className="btn btn-marvel rounded-0">
              Official Marvel Page
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterModal
