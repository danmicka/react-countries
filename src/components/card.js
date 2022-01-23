import React from "react";

export default function Card({
  name,
  flag,
  population,
  region,
  capital,
  cardToCardContainer,
}) {
  return (
    <div className="card">
      <img src={flag} alt={name} width="326" height="196" className="img"></img>
      <h2>{name}</h2>
      <p>
        <span className="bold">Population:</span>
        {population}
      </p>
      <p>
        <span className="bold">Region:</span>
        {region}
      </p>
      <p>
        <span className="bold">Capitol:</span>
        {capital}
      </p>
    </div>
  );
}
