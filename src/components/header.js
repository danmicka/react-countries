import React from "react";

export default function Header({ changeDarkmode, className }) {
  const handleClick = (e) => {
    changeDarkmode();
  };

  return (
    <div className={`header ${className}`}>
      <h2>Where in the world?</h2>
      <span></span>
      <button onClick={handleClick}>Dark Mode</button>
    </div>
  );
}
