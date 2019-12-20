import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacterList(response.data.results);
      })
      .catch(error => {
        console.log('The requested data was not returned', error);
      })
  }, []);

  return (
    <section className="character-list">
      {characterList.map(element => {
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

