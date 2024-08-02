import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      rowNumber: 1,
      rowDescription: "Adidas Running Club",
      rowAssigned: "Candi",
    },
    { rowNumber: 2, rowDescription: "Skin care", rowAssigned: "Candi" },
    { rowNumber: 3, rowDescription: "Swimming", rowAssigned: "Candi" },
    { rowNumber: 4, rowDescription: "Yoga", rowAssigned: "Candi" },
  ]);

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: "New Todo",
        rowAssigned: "Candi",
      };
      setTodos((todos) => [...todos, newTodo]);
    }
  };
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={addTodo}>
            Add Todo
          </button>
          <NewTodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
