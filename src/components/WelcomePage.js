import React from "react";
import styled from 'styled-components';

export default function WelcomePage() {
  const Title = styled.h1`
        color: blue;
        font-size:2.5rem;
      `

  const MainImage = styled.img`
    border:black solid 2px;
  `

  return (
    <section className="welcome-page">
      <header>
      
        <Title>Welcome to the ultimate fan site!</Title>
        <MainImage
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}
