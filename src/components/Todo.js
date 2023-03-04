import React from "react";
import { Button} from "react-bootstrap";
import {ACTIONS} from '../App.js';
import {FaArchive, FaCheck} from 'react-icons/fa'


export default function Todo({ todo,category, dispatch }) {
  return (
    
      <div style={{ margin: "20px" ,backgroundColor:"#fcd7a8" }}>
      <div
        style={{
          backgroundColor: todo.complete ? "lightblue": "#fcd7a8" ,
          borderRadius: "5px",
        }}
        className="p-2  "
      >
        <div className="wrap-task d-flex pe-4">
        <div className="pe-4 task-name">{todo.name}</div> <div >{todo.category}</div>
        </div>
      </div>


      <Button variant="outline-none" className="m-1 task-button-green"
      onClick={()=> dispatch({ type: ACTIONS.TOGGLE, payload : {id :todo.id}})}
      >
        <div className="FaCheck"><FaCheck/></div>
      </Button>
      <Button variant="outline-none" className="m-1 task-button-red"
      onClick={()=> dispatch({ type: ACTIONS.DELETE, payload : {id :todo.id}})}
        ><div className="FaArchive"><FaArchive/></div>
      </Button>
    </div>
    
  );
}
