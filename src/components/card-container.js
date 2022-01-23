import React from "react";
import Card from "./card";

export default function CardsContainer({ country, region = "All" }) {
  const [countries, setCountries] = React.useState([]);

  function getCountries(ctrylist, name, region) {
    console.log("getCountries:", ctrylist);

    const listCtryFilteredByRegion =
      region !== "All"
        ? ctrylist.filter(
            (ctry) => ctry.region.toLowerCase() === region.toLowerCase()
          )
        : ctrylist;

    console.log(
      "car-container-listCtryFilteredByRegion:",
      listCtryFilteredByRegion
    );

    return name !== ""
      ? listCtryFilteredByRegion.filter((ctry) =>
          ctry.name.toLowerCase().startsWith(name.toLowerCase())
        )
      : listCtryFilteredByRegion;
  }

  React.useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((json) => setCountries(getCountries(json, country, region)));

    console.log("card-container", region);
    //console.log(countries);
    //console.log("country container:", country);
  }, [country, region]);

  return (
    <div className="card-container">
      {countries.map((country, index) => (
        <Card
          key={index}
          name={country.name}
          flag={country.flags.png}
          population={country.population}
          region={country.region}
          capital={country.capital}
        ></Card>
      ))}
    </div>
  );
}
