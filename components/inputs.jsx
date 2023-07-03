"use client";

import React, { useState } from "react";

function Inputs(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setAnswers([...answers, selectedOption]);
    setSelectedOption("");
  };

  const inputOptions = JSON.parse(props.options);

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Choose an option:</label>
      <ul className="bg-gray-100">
        {inputOptions.map((option) => (
          <li key={option}>
            <label>
              <input
                type="radio"
                name="options"
                value={option.item}
                checked={selectedOption === option.item}
                onChange={handleOptionChange}
                className="mr-2"
              />
              {option.item}
            </label>
          </li>
        ))}
      </ul>
      <button type="submit">Submit</button>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </form>
  );
}

export default Inputs;
