import React from "react";

export default function SearchBlock({
  country,
  changeCountry,
  region,
  changeRegion,
}) {
  const handleChangeCountry = (e) => {
    changeCountry(e.target.value);
  };

  const handleChangeRegion = (e) => {
    e.preventDefault();
    console.log("select:", e.target.value);
    changeRegion(e.target.value);
  };
  return (
    <div className="search-block">
      <input type="text" value={country} onChange={handleChangeCountry} />
      <span></span>
      <form>
        <select
          value={region}
          name="region"
          className="region-option"
          onChange={handleChangeRegion}
        >
          <option defaultValue="All">All</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">oceania</option>
        </select>
      </form>
    </div>
  );
}
