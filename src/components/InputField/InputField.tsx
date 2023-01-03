import React from "react";
import "./InputField.css"

const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a task" className="inputBox" />
      <button className="inputSubmitButton" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
