function CharacterCard({ character }) {
    return (
        <section className="character-card">
            <figure>
                <img src={character.photo} alt=""></img>
            </figure>
            <div>
                <h2>{character.name}</h2>
                <span>
                    {character.status} - {character.species}
                </span>
                <span>Last known location:</span>
                <span>{character.location}</span>
            </div>
        </section>
    )
}

export default CharacterCard
