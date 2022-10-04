import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { restCountriesUrlName } from "../../utils/globals";
import { BackButton } from "../Buttons";
import CountryInfo from "./CountryInfo";
import CountryInfoSkeleton from "./CountryInfoSkeleton";
import useHttp from "../../hooks/useHttp";
import Country from "../../models/Country";

function CountryPage() {
  const { state: defaultState } = useLocation();
  const [details, setDetails] = useState(defaultState);
  const { loading, error, request } = useHttp();
  const { commonName } = useParams();

  useEffect(() => {
    let subscribed = true;

    if (defaultState == null) {
      const urlWithCountryName = `${restCountriesUrlName}/${commonName}`;

      request({ url: urlWithCountryName })
        .then((data) => {
          if (!subscribed) return;

          const countryDetails = new Country(data[0]);
          setDetails(countryDetails);
        })
        .catch(() => {
          setDetails(new Country());
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
      {!loading && details && <CountryInfo details={details} />}
      {loading && !error && <CountryInfoSkeleton />}
    </main>
  );
}

export default CountryPage;
