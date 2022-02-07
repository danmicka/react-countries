import React from "react";
import "./App.css";

import Headers from "./components/header";
import SearchBlock from "./components/search-block";
import CardsContainer from "./components/card-container";
import CardDetails from "./components/card-details";

function App() {
  const [country, setCountry] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [region, setRegion] = React.useState("All");
  const [isDarkmode, setIsDarkmode] = React.useState(false);
  const [darkModeClass, setDarkModeClass] = React.useState("");

  const changeCountry = (country) => {
    setCountry(country);
    console.log("country-parent", country);
  };

  const changeRegion = (region) => {
    setRegion(region);
    console.log("region-parent", region);
  };

  const changeDarkmode = () => {
    setIsDarkmode(!isDarkmode);
    console.log("darkModeClas-b:", darkModeClass);
    const b = isDarkmode ? "darkmode-enabled" : "darkmode-disabled";
    console.log("b:", b);
    setDarkModeClass(b);
    console.log("isDarkmode:", isDarkmode);
    console.log("darkModeClas:", darkModeClass);
  };

  const handleCountrySelect = (countryCode) => {
    setSelectedCountry(countryCode);
  };

  const handleReset = () => {
    setSelectedCountry(null);
  };

  return (
    <>
      <Headers changeDarkmode={changeDarkmode} className={darkModeClass} />
      {selectedCountry ? (
        <>
          <CardDetails countryCode={selectedCountry} reset={handleReset} />
        </>
      ) : (
        <>
          <SearchBlock
            country={country}
            changeCountry={changeCountry}
            region={region}
            changeRegion={changeRegion}
            isDarkmode={isDarkmode}
            className={darkModeClass}
          />
          <CardsContainer
            country={country}
            region={region}
            className={darkModeClass}
            onCountrySelect={handleCountrySelect}
          />
        </>
      )}
    </>
  );
}

export default App;
