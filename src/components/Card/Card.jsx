import React from "react";
import PropTypes from "prop-types";
import slugify from "slugify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

function Card({ countriesData }) {
  const { flag, name, population, region, capital } = countriesData;

  return (
    <figure className="dark:bg-dark-blue rounded-5 flex h-[21rem] w-[16.5rem] flex-col bg-white text-black shadow-sm transition-colors dark:text-white">
      <LazyLoadImage
        className="rounded-t-5 h-40 w-full object-cover"
        effect="blur"
        src={flag}
        title={`${name} flag`}
        alt={`${name} flag`}
        width="16.5rem"
        height="10rem"
      />
      <figcaption className="grid h-44 p-6 pb-[2.875rem]">
        <Link
          to={`/countries/${slugify(name, { lower: true })}`}
          state={countriesData}
        >
          <h2 className="font-extra-bold">{name}</h2>
        </Link>
        <div className="mt-4 grid gap-2 text-sm font-light leading-4">
          <p>
            <span className="font-semi-bold">Population: </span>
            <span>{population}</span>
          </p>
          <p>
            <span className="font-semi-bold">Region: </span>
            <span>{region}</span>
          </p>
          <p>
            <span className="font-semi-bold">Capital: </span>
            <span>{capital}</span>
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

Card.propTypes = {
  countriesData: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
