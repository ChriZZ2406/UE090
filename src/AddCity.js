// AddCity.js

import React, { useState } from "react";

function AddCity({ onAdd }) {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(city);
    setCity("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Stadt hinzufügen..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" style={{backgroundColor: "green", color: "white"}}>Stadt</button>
    </form>
  );
}

export default AddCity;
