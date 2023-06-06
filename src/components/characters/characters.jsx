import CharacterCard from 'components/character-card/character-card'
import Loader from 'components/loader/loader'
import { useEffect, useState } from 'react'
import getCharacters from 'services/get-characters-service'

function Characters() {
    const [characters, setCharacters] = useState(null)

    useEffect(() => {
        getCharacters().then(response => setCharacters(response))
    }, [])

    if (!characters) {
        return <Loader />
    }

    return (
        <>
            {characters.map(character => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </>
    )
}

export default Characters
