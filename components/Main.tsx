import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import UtilityBar from "./UtilityBar";
import CountryCard from "./CountryCard";
import { Country } from "../interface";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em 3em;
`;
const Countries = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 1em;
`;

const Main = () => {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [searchedCountries, setSearchedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://restcountries.com/v2/all");
      const json = await data.json();
      setAllCountries(json);
    };
    fetchData();
  }, []);

  const viewCountries = searchedCountries.length ? searchedCountries : allCountries;
  // console.log("THE COUNTRIES", countries);

  return (
    <Container>
      <UtilityBar allCountries={allCountries} setSearchedCountries={setSearchedCountries} />
      <Countries>
        {viewCountries.map((country, idx) => (
          <CountryCard key={idx} country={country} />
        ))}
      </Countries>
    </Container>
  );
};

export default Main;
