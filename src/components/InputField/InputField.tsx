import React from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  return (
    <form className="input" onSubmit={handleAddTodo}>
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="inputBox"
      />
      <button className="inputSubmitButton" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
