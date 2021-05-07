import './styles.scss'

interface CharacterCardProps {
  showDetails: (record?: any) => any
  character: any
}

function CharacterCard({ character, showDetails }: CharacterCardProps) {
  return (
    <div className="col-12 col-md-6">
      <div className="card mb-3 border-marvel character-card">
        <div className="card-body">
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            className="figure-fluid float-left"
            alt="Character thumbnail"
          />

          <div className="character-card-details">
            <h3 className="card-title text-truncate h5" title={character.name}>
              {character.name}
            </h3>
            <div className="card-text text-center">
              <button
                type="button"
                className="btn btn-sm btn-marvel w-50 rounded-0"
                onClick={showDetails.bind(null, character)}
              >
                More Details...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
