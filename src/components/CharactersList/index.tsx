import { FC, useState } from 'react'
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

const CharactersList: FC<CharactersListProps> = ({
  goToPage, currentPage, characters, metadata: { total = 1, limit = 1 },
}) => {
  const [displayDetails, setDisplayDetails] = useState(null)

  return (
    <div className="pb-4">
      <If condition={total > limit}>
        <Pagination
          goToPage={goToPage}
          current={currentPage}
          total={total}
          limit={limit}
        />
      </If>

      <div className="row">
        {characters.map((character: any) => (
          <CharacterCard
            key={character.id}
            character={character}
            showDetails={() => setDisplayDetails(character)}
          />
        ))}
      </div>

      <If condition={total > limit}>
        <Pagination
          goToPage={goToPage}
          current={currentPage}
          total={total}
          limit={limit}
          displayCounter
        />
      </If>

      <If condition={!!displayDetails}>
        <CharacterModal
          character={displayDetails}
          hideDetails={setDisplayDetails}
        />
      </If>
    </div>
  )
}

export default CharactersList
