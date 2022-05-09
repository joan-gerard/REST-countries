import React from "react";
import Image from "next/image";

import styled from "@emotion/styled";

const Card = styled.div`
  width: 260px;
  height: 300px;
  margin: 1em 0.5em;
  background-color: var(--color-bg-header);
  box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
`;
const ImageContainer = styled.div`
  width: 260px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  max-height: 120px;
`;
const InfoContainer = styled.div`
  padding: 0 1.5em;
`;

const CountryCard = ({ country }) => {
  return (
    <Card>
      <ImageContainer>
        <img src={country.flags.svg} />
      </ImageContainer>
      <InfoContainer className="InfoContainer">
        <h4>{country.name}</h4>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </InfoContainer>
    </Card>
  );
};

export default CountryCard;
