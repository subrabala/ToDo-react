import React from "react";
import { Button} from "react-bootstrap";
import {ACTIONS} from '../App.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Todo({ todo, dispatch }) {
  return (
    <div style={{ margin: "20px" }}>
      <div
        style={{
          backgroundColor: todo.complete ? "lightgreen" : "lightblue",
          borderRadius: "5px",
        }}
        className="p-2  "
      >
        {todo.name} <span>{todo.category}</span>
      </div>
      <Button variant="outline-primary" className="m-1"
      onClick={()=> dispatch({ type: ACTIONS.TOGGLE, payload : {id :todo.id}})}
      >
        <i className="fa-sharp fa-solid fa-check"></i>
      </Button>
      <Button variant="outline-danger" className="m-1"
      onClick={()=> dispatch({ type: ACTIONS.DELETE, payload : {id :todo.id}})}
        ><i className="fa-sharp fa-solid fa-trash"></i>
      </Button>
    </div>
  );
}
