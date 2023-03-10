import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import TodoList from "./components/TodoList/Todolist";
import { Todo } from "./model";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([ ...todos, {id: Date.now(), todo, isDone: false} ])
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo}></InputField>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
}

export default App;
