import CharacterCard from 'components/character-card/character-card'
import Loader from 'components/loader/loader'
import { useEffect, useState } from 'react'
import getCharacters from 'services/get-characters-service'
import './characters.scss'

function Characters() {
    const [characters, setCharacters] = useState(null)

    useEffect(() => {
        getCharacters().then(response => setCharacters(response))
    }, [])

    if (!characters) {
        return <Loader />
    }

    return (
        <div className="characters">
            <h1 className="characters__title">The Rick and Morty API</h1>
            <div className="characters__cards">
                {characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    )
}

export default Characters
