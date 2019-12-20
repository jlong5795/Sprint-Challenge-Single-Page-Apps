import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';


export default function SearchForm(props) {
  const [searchTerms, setSearchTerms] = useState('');
  const [result, setResults] = useState([]);
    
  const results = props.characterList.filter(character => {
    character.toLowerCase().includes(searchTerms.toLowerCase()); 
    setResults(results);
    });
 
  
  const changeHandler = e => {
    setSearchTerms(e.target.value);
  return (
    <section className="search-form">
      <h1>Rick and Morty Character Search</h1>
      <form>
      <input type='text' value={searchTerms} placeholder='Search' onChange={changeHandler} />
      </form>
      <div>
      {results.map(element => {
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
     </div>
    </section>
  );
  }
}