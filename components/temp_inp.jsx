"use client";

import React, { useState } from "react";

function DatalistForm(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const inputOptions = JSON.parse(props.options);

  return (
    <form>
      <label htmlFor="datalist-input">Choose an option:</label>
      <input
        list="options"
        id="datalist-input"
        name="options"
        value={selectedOption}
        onChange={handleOptionChange}
      />

      <ul>
        <li>
          {inputOptions.map((option) => (
            <option key={option.item}>{option.item}</option>
          ))}
        </li>
      </ul>
    </form>
  );
}

export default DatalistForm;
