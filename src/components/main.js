import React from "react";
import Card from "./card";

export default function Main({ country }) {
  const [countries, setCountries] = React.useState([]);
  // API call
  React.useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((json) => setCountries(json));
    console.log(countries);
  }, [country]);

  return (
    <div className="main">
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
