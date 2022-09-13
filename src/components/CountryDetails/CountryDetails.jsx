import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BackButton from "./BackButton";
import useHttp from "../../hooks/useHttp";
import Country from "../../models/Country";

const url = "https://restcountries.com/v3.1/name/";

function CountryDetails() {
  const { state: defaultState } = useLocation();
  const [details, setDetails] = useState(defaultState);
  const { loading, error, request } = useHttp();
  const { commonName } = useParams();

  useEffect(() => {
    let subscribed = true;

    if (defaultState == null) {
      const urlWithCountryName = `${url}${commonName}`;

      request({ url: urlWithCountryName }).then((data) => {
        if (!subscribed) return;

        const countryDetails = new Country(data[0]);
        setDetails(countryDetails);
      });
    }

    return () => {
      subscribed = false;
    };
  }, []);

  return (
    <main
      className="
      px-7 pt-10 pb-[3.75rem]
      md:px-20
      lg:pt-20"
    >
      <BackButton />
      {!loading && !error && details && (
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
            src={details.flag}
            title={`${commonName} flag`}
            alt={`${commonName} flag`}
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
              {details.name}
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
                <li>
                  <span className="font-semi-bold">Native Name: </span>
                  <span>{details.nativeName}</span>
                </li>
                <li>
                  <span className="font-semi-bold">Population: </span>
                  <span>{details.population}</span>
                </li>
                <li>
                  <span className="font-semi-bold">Region: </span>
                  <span>{details.region}</span>
                </li>
                <li>
                  <span className="font-semi-bold">Sub Region: </span>
                  <span>{details.subregion}</span>
                </li>
                <li>
                  <span className="font-semi-bold">Capital: </span>
                  <span>{details.capital}</span>
                </li>
              </ul>
              <ul
                className="
                mt-8
                md:mt-0"
                aria-label="Additional information about the country"
              >
                <li>
                  <span className="font-semi-bold">Top Level Domain: </span>
                  <span>{details.topLevelDomain}</span>
                </li>
                <li>
                  <span className="font-semi-bold">Currencies: </span>
                  <span>{details.currencies}</span>
                </li>
                <li>
                  <span className="font-semi-bold">Languages: </span>
                  <span>{details.languages}</span>
                </li>
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
                {details.borderCountries.map((country) => (
                  <li
                    className="dark:bg-dark-blue grid h-7 w-max min-w-[6rem] place-items-center rounded-sm bg-white px-[0.625rem] shadow-lg"
                    key={country}
                  >
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          </figcaption>
        </figure>
      )}
    </main>
  );
}

export default CountryDetails;
