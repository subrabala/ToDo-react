import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import Todo from "./components/Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE: "toggle",
  DELETE: "delete",
};

export function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      console.log(todos.category)
      return [...todos, newTodo(action.payload.name, action.payload.category)];
      
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name, category) {
  return { id: Date.now(), name: name, complete: false, category: category };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Default");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
    setCategory("Default");
  }
  console.log(todos);
  console.log(category);
  return (
    <>
      <Form onSubmit={handleSubmit} className="m-4 p-4">
        <Form.Label className="pb-2">Task Name</Form.Label>
        <Form.Control
          className="mb-4"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Select
          size="sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Academics</option>
          <option>Household</option>
          <option>NTL</option>
        </Form.Select>
        <Button type="submit" variant="primary">Submit</Button>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>;
        })}
      </Form>
    </>
  );
}

export default App;
