import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import UtilityBar from "./UtilityBar";
import CountryCard from "./CountryCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5em 3em;
`;
const Countries = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Main = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://restcountries.com/v2/all");
      const json = await data.json();
      setCountries(json);
    };
    fetchData();
  }, []);

  console.log("THE COUNTRIES", countries);

  return (
    <Container>
      <UtilityBar />
      <Countries>
        {countries.map((country, idx) => (
          <CountryCard key={idx} country={country} />
        ))}
      </Countries>
    </Container>
  );
};

export default Main;
