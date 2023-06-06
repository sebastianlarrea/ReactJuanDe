import './character-card.scss'

function CharacterCard({ character }) {
    const statusColor =
        character.status === 'Alive'
            ? 'green'
            : character.status === 'Dead'
            ? 'red'
            : 'white'

    return (
        <section className="character-card">
            <figure className="character-card__image-container">
                <img
                    className="character-card__image"
                    src={character.photo}
                    alt={character.name}
                ></img>
            </figure>
            <div className="character-card__info">
                <h2>{character.name}</h2>
                <span>
                    <div
                        className="character-card__status-circle"
                        style={{ backgroundColor: statusColor }}
                    />
                    {character.status} - {character.species}
                </span>
                <div className="character-card__location-info">
                    <span className="character-card__location-title">
                        Last known location:
                    </span>
                    <span> {character.location}</span>
                </div>
            </div>
        </section>
    )
}

export default CharacterCard
