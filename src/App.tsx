import React from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField></InputField>
      <p>Hello World</p>
    </div>
  );
}

export default App;
