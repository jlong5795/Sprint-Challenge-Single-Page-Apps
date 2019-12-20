import React from "react";

export default function CharacterCard(props) {
  return (
  <div className='character-card' key={props.id}>
    
    {<>
    <p>Name: {props.name}</p>
    <p>Status: {props.status}</p>
    <p>Species: {props.species}</p>
    <p>Gender: {props.gender}</p>
    <img src={props.imgURL} alt={`Image of ${props.name}`}/>
    </>}
    
  </div>
  )
  }
