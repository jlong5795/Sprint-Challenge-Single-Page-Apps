import React from "react";
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  return (
    <section className="character-list">
      {props.characterList.map(element => {
        return(
          <CharacterCard 
            key={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            imgURL={element.image}/>
        )
      })}
    </section>
  )
}

