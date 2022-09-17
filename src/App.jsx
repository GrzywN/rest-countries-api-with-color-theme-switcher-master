import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import useHttp from "./hooks/useHttp";
import Country from "./models/Country";
import Header from "./components/Header";
import CountriesCardsContainer from "./containers/CountriesCardsContainer";
import CountryPage from "./components/CountryPage";

import "react-lazy-load-image-component/src/effects/blur.css";

const restCountriesUrl = "https://restcountries.com/v3.1/";
const restCountriesFullUrl = `${restCountriesUrl}all`;

function App() {
  const [countries, setCountries] = useState();
  const { loading, error, request } = useHttp();

  useEffect(() => {
    let subscribed = true;

    request({ url: restCountriesFullUrl }).then((data) => {
      if (!subscribed) return;

      const entries = data.map((country) => new Country(country));
      setCountries(entries);
    });

    return () => {
      subscribed = false;
    };
  }, []);

  return (
    <div className="bg-very-light-gray dark:bg-very-dark-blue-dm min-h-screen transition-colors">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <CountriesCardsContainer
              loading={loading}
              error={error}
              data={countries || []}
            />
          }
        />
        <Route path="/country/:commonName" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
