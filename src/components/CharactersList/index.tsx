import { useState } from 'react'

import CharacterCard from '../CharacterCard'
import CharacterModal from '../CharacterModal'
import Pagination from '../Pagination'
import './styles.scss'

interface CharactersListProps {
  goToPage: (page: number) => any
  currentPage: number
  characters: any[]
  metadata: {
    total?: number
    limit?: number
  }
}

function CharactersList({
  goToPage,
  characters,
  currentPage,
  metadata: { total = 1, limit = 1 },
}: CharactersListProps) {
  const [displayDetails, setDisplayDetails] = useState(null)

  return (
    <div className="pb-4">
      {total > limit && (
        <Pagination goToPage={goToPage} current={currentPage} total={total} limit={limit} />
      )}

      <div className="row">
        {characters.map((character: any) => (
          <CharacterCard
            key={character.id}
            character={character}
            showDetails={() => setDisplayDetails(character)}
          />
        ))}
      </div>

      {total > limit && (
        <Pagination
          goToPage={goToPage}
          current={currentPage}
          total={total}
          limit={limit}
          displayCounter
        />
      )}

      {!displayDetails || (
        <CharacterModal character={displayDetails} hideDetails={setDisplayDetails} />
      )}
    </div>
  )
}

export default CharactersList
