import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import { Route, Link, Switch } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';
import styled from 'styled-components';


export default function App() {
const [characterList, setCharacterList] = useState([]);

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const AppWrapper = styled.div`
  background-color: cyan;
`

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
    <AppWrapper>
      <nav>
        <Header />
        <NavWrapper className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
        <Link to='/search'>Search</Link>
        </NavWrapper>
      </nav>
      <Switch>
        <Route path='/search'>
          <SearchForm characterList={characterList}/>
        </Route>
        <Route path='/characters'>
          <CharacterList characterList={characterList}/>
        </Route>
        <Route path='/'>
          <WelcomePage />
        </Route>
      </Switch>
      
      
      
      
      
    </AppWrapper>
  );
}
