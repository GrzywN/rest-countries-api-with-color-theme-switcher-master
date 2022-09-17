import React from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ListEntry from "../ListEntry";
import BorderCountryChip from "./BorderCountryChip";

function CountryInfo({ details }) {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borderCountries,
  } = details;

  return (
    <figure
      className="
      mt-16 flex flex-col items-center gap-11
      lg:flex-row lg:justify-center lg:gap-36"
    >
      <LazyLoadImage
        className="
        rounded-5 h-[14.3125rem] w-full object-cover
        md:h-auto md:max-w-[35rem]"
        effect="blur"
        src={flag}
        title={`${name} flag`}
        alt={`${name} flag`}
        width="20rem"
        height="14.3125rem"
      />
      <figcaption
        className="
        text-very-dark-blue-lm w-full max-w-[20rem] dark:text-white
        md:max-w-[35.875rem]"
      >
        <h2
          className="
          font-extra-bold font-sans text-[1.375rem] leading-[1.875rem] tracking-normal
          md:text-[2rem] md:leading-[2.75rem]"
          aria-label="Country name"
        >
          {name}
        </h2>
        <div
          className="
          font-sans text-sm font-light leading-8 tracking-normal
          md:mt-[1.4375rem] md:flex md:justify-between md:text-base md:leading-8"
        >
          <ul
            className="
            mt-4
            md:mt-0"
            aria-label="Main information about the country"
          >
            <ListEntry attribute="Native Name: " value={nativeName} />
            <ListEntry attribute="Population: " value={population} />
            <ListEntry attribute="Region: " value={region} />
            <ListEntry attribute="Sub Region: " value={subregion} />
            <ListEntry attribute="Capital: " value={capital} />
          </ul>
          <ul
            className="
            mt-8
            md:mt-0"
            aria-label="Additional information about the country"
          >
            <ListEntry attribute="Top Level Domain: " value={topLevelDomain} />
            <ListEntry attribute="Currencies: " value={currencies} />
            <ListEntry attribute="Languages: " value={languages} />
          </ul>
        </div>
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <h3 className="font-semi-bold font-sans text-base tracking-normal">
            Border Countries:
          </h3>
          <ul
            className="
            flex max-w-[19.25rem] flex-wrap gap-[0.625rem] font-sans text-xs font-light leading-4 tracking-normal
            md:max-w-[26.875rem] md:justify-center md:text-sm md:leading-[1.1875rem]"
          >
            {borderCountries.map((country) => (
              <BorderCountryChip name={country} key={country} />
            ))}
          </ul>
        </div>
      </figcaption>
    </figure>
  );
}

CountryInfo.propTypes = {
  details: PropTypes.shape({
    flag: PropTypes.string,
    name: PropTypes.string,
    nativeName: PropTypes.string,
    population: PropTypes.string,
    region: PropTypes.string,
    subregion: PropTypes.string,
    capital: PropTypes.string,
    topLevelDomain: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    currencies: PropTypes.string,
    languages: PropTypes.string,
    borderCountries: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CountryInfo;
