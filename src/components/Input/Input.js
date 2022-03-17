import React, { useState } from "react";
import PropTypes from "prop-types";

import "./input.css";

function Input(props) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function getValue() {
    return value;
  }

  return (
    <input
      name={props.name}
      className={"react-input"}
      placeholder={props.placeholder || "Enter text..."}
      value={value}
      onChange={handleChange}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default Input;
