import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';

export default function SearchForm(props) {
  const [searchTerms, setSearchTerms] = useState('');
  const [result, setResults] = useState([]);
    
  useEffect(() => {
    const results = props.characterList.filter(character => 
      character.name.toLowerCase().includes(searchTerms.toLowerCase())
    );
      console.log(results);
      setResults(results);
  },[searchTerms]);

  const changeHandler = e => {
    setSearchTerms(e.target.value);
  };

  return (
    <section className="search-form">
      <h1>Rick and Morty Character Search</h1>
      <form>
      <input type='text' value={searchTerms} placeholder='Search' onChange={changeHandler} />
      </form>
      <div>
      {result.map(element => 
          <CharacterCard 
            key={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            imgURL={element.image}/>
        )}
    </div>
    </section>
  );
}