import React, { useReducer, useState, useEffect } from "react";
import Switch from 'react-switch';
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { Button, Form } from "react-bootstrap";
import Todo from "./components/Todo";
import './App.css'

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
  const [dark,setDark] = useState(true);
  // const [tasks, setTasks] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name, category} });
    setName("");
    setCategory("Default");
  }
  console.log(todos);
  console.log(category);

//   useEffect(() => {
//     let myTodo = localStorage.getItem('myTodoTasks');
//     if (myTodo) {
//         setTasks(JSON.parse(myTodo))
//     }
// }, [])

  return (
    <>
      <Form onSubmit={handleSubmit} className=" p-4 form ">
        <h1 className="p-4">ToDo App</h1>
        <div className="switch">
        <Switch
        className="toggle-switch mx-auto"
        checked={dark}
        onChange={() => setDark(!dark)}
        uncheckedIcon={<div className=' check-sun-btn toggle' ><BsSunFill size={18} /></div>}
        checkedIcon={<div className=' check-moon-btn toggle'><BsFillMoonStarsFill size={18} /></div>} 
        />
        </div>
        <div className="details">
        <Form.Control
          className="mb-4 inputs"
          type="text"
          value={name}
          
          placeholder="Task Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Select
          size="sm"
          className="mb-4 inputs"
          value={category}
          
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Academics</option>
          <option>Household</option>
          <option>NTL</option>
        </Form.Select>
        <Button type="submit" variant="primary" className="mb-4 p-2 pe-4 ps-4 submit">Add</Button>
        </div>

        

        <div className="task-wrap">
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} category={category} dispatch={dispatch} className="task"></Todo>;
        })}
        </div>
      </Form>
    </>
  );
}

export default App;
