import React from "react";
import { useState } from "react";
import "./style.css";

export default function CountrySelector({ countries, handleOnChange, value }) {
  // console.log(countries);
  return (
    <form className="countries__form">
      <label className="countries__label" htmlFor="countrySelector">
        Quốc gia
      </label>
      <select
        className="countries__select"
        id="countrySelector"
        value={value}
        onChange={handleOnChange}
        inputProps={{ name: "country", id: "countrySelector" }}
      >
        {countries.map((country, index) => (
          <option
            className="countries__option"
            key={index}
            value={country.ISO2.toLowerCase()}
          >
            {country.Country}
          </option>
        ))}
      </select>
      <p className="countries__sub">Lựa chọn quốc gia</p>
    </form>
  );
}
