import React from "react";

export default function CardDetails({ countryCode, reset }) {
  const [results, setResults] = React.useState([]);
  console.log("card-details", countryCode);

  React.useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${countryCode}`)
      .then((response) => response.json())
      .then((json) => setResults(json));

    //console.log("results", results);
  }, [countryCode]);

  const handleReset = () => {
    reset();
  };

  return (
    <div className="card-details">
      {results.map((result) => (
        <div key={result.name}>
          <img
            src={result.flags.png}
            alt={result.name}
            width="326"
            height="196"
          ></img>
          <h2>{result.name}</h2>
          <p>
            <span className="bold">Population:</span>
            {result.population}
          </p>
          <p>
            <span className="bold">Region:</span>
            {result.region}
          </p>
          <p>
            <span className="bold">Sub Region:</span>
            {result.subregion}
          </p>

          <p>
            <span className="bold">Capital:</span>
            {result.capital}
          </p>
          <p>
            <span className="bold">Top Level Domain :</span>
            {result.topLevelDomain[0]}
          </p>
          <p>
            <span className="bold">Currencies:</span>
            {result.currencies.map((currency) => (
              <span>{currency.code + " "}</span>
            ))}
          </p>
          <div>
            <span className="bold">Langage :</span>
            {result.languages.map((language) => (
              <span>{language.name + " "}</span>
            ))}
          </div>
          <p>
            <span className="bold">Border Countries :</span>
            {result.borders.map((border) => (
              <span>{border + " "}</span>
            ))}
          </p>

          <input type="button" onClick={handleReset} value="back" />
        </div>
      ))}
    </div>
  );
}
