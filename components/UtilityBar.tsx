import { FormEvent, useRef } from "react";
import styled from "@emotion/styled";
import search from "../public/search2.svg";
import { Country } from "../interface";

const Utility = styled.nav`
  padding: 0 0.5em;
  font-weight: 600;
  margin: 1.5em 0;
`;

type Props = {
  setSearchedCountries: (arg: Country[]) => void,
  allCountries: Country[]
}

const UtilityBar: React.FC<Props> = ({setSearchedCountries, allCountries}) => {
  let searchInputRef = useRef<HTMLInputElement | null>(null);

  const getSearchInput = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchInput = searchInputRef?.current?.value;
    const regex = new RegExp(searchInput || '')

    const searchCountry = allCountries.filter((country) => {
      return country.name.toLowerCase().match(regex)
    })
    setSearchedCountries(searchCountry)
  };

  return (
    <Utility>
      <form onSubmit={getSearchInput} className="search-bar">
        <input
          className="search-bar__input"
          type="search"
          placeholder="Search for a country..."
          ref={searchInputRef}
        />
        <input className="search-bar__submit-btn" type="submit" value="" />
      </form>
    </Utility>
  );
};

export default UtilityBar;
