import React from "react";

export default function CardDetails({ name = "peru" }) {
  const [results, setResults] = React.useState([]);
  console.log("card-details", name);

  React.useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then((response) => response.json())
      .then((json) => setResults(json));

    console.log("card-details", results);
  }, [name, results]);

  return (
    <div className="card-details">
      {results.map((result) => (
        <div>
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
            <span className="bold">Capitol:</span>
            {result.capital}
          </p>
        </div>
      ))}
    </div>
  );
}
