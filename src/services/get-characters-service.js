import axios from 'axios'
import { BASE_URL } from '../constants'

const CHARACTERS_URL = `${BASE_URL}/character`

async function getCharacters() {
    return axios.get(CHARACTERS_URL).then(response =>
        response.data.results.map(character => ({
            id: character.id,
            episode: character.episode[0],
            gender: character.gender,
            photo: character.image,
            name: character.name,
            origin: character.origin.name,
            species: character.species,
            status: character.status,
            location: character.location.name
        }))
    )
}

export default getCharacters
