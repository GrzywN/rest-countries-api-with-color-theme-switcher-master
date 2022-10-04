/* eslint-disable react/no-array-index-key */

import React, { useState } from "react";
import PropTypes from "prop-types";
import CardsContainer from "../../components/CardsContainer";
import { Card, SkeletonCard } from "../../components/Card";
import { CountryPropTypes } from "../../models/Country";
import { AFRICA, AMERICA, ASIA, EUROPE, OCEANIA } from "../../utils/globals";

function CountriesCardsContainer({ loading, error, data }) {
  // console.log(data);

  const [search, setSearch] = useState("");
  const [regionFilters, setRegionFilters] = useState({
    [AFRICA]: true,
    [AMERICA]: true,
    [ASIA]: true,
    [EUROPE]: true,
    [OCEANIA]: true,
  });

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleFilter = (name, value) => {
    setRegionFilters({ ...regionFilters, [name]: value });
  };

  const getSkeletonCards = (cardsCount = 12) => {
    const filledArray = Array(cardsCount).fill(0);
    const skeletonCards = filledArray.map((_, index) => (
      <SkeletonCard key={index} />
    ));

    return skeletonCards;
  };

  const formatText = (text) => {
    return text.trim().toLowerCase();
  };

  const filterByRegions = (countriesData, regions) => {
    return countriesData.filter(({ region }) => {
      let isIncluded = false;

      const formattedCountryRegion = formatText(region);
      const regionNames = Object.keys(regions);

      regionNames.forEach((currentRegion) => {
        const isRegionSelected = !!regions[currentRegion];
        if (!isRegionSelected) return;

        const formattedRegionName = formatText(currentRegion);
        const isRegionMatch =
          formattedCountryRegion.includes(formattedRegionName);

        if (isRegionMatch) isIncluded = true;
      });

      return isIncluded;
    });
  };

  const filterBySearch = (countries, searchQuery) => {
    return countries.filter(({ name }) => {
      const formattedName = formatText(name);
      const formattedQuery = formatText(searchQuery);

      const isIncluded = formattedName.includes(formattedQuery);

      return isIncluded;
    });
  };

  const getFilteredCountries = (countries, regions, searchQuery) => {
    const countriesByRegions = filterByRegions(countries, regions);
    const countriesBySearch = filterBySearch(countriesByRegions, searchQuery);

    return countriesBySearch;
  };

  return (
    <>
      {loading && (
        <div role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <CardsContainer
        searchHandler={handleSearch}
        filterChangeHandler={handleFilter}
        filterState={regionFilters}
      >
        {loading && getSkeletonCards()}
        {!loading &&
          !error &&
          getFilteredCountries(data, regionFilters, search).map((country) => (
            <Card key={country.name} countriesData={country} />
          ))}
      </CardsContainer>
    </>
  );
}

CountriesCardsContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  data: PropTypes.arrayOf(CountryPropTypes),
};

CountriesCardsContainer.defaultProps = {
  error: null,
  data: [],
};

export default CountriesCardsContainer;
