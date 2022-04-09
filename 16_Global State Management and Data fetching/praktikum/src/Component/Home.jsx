import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { delettodo, edittodo, addtodo } from "../store/todoSlice";
import "../App.css";

export default function Home() {
  const dispatch = useDispatch();
  const pesengers = useSelector((state) => state.todoo.passengers);
  console.log("ini isinya ", pesengers);
  const [newTitle, setNewTitle] = useState("");

  const render = pesengers.map((todo) => (
    <div className="isi" key={todo.id}>
      <div className="dalamisi">
        <span className="title">
          <input
          className="checkbox"
            checked={todo.done}
            type="checkbox"
            onChange={() => dispatch(edittodo(todo.id))}
          />
          <span style={todo.done ? { textDecoration: "line-through" } : {}}>
            {" "}
            {todo.title}
          </span>
        </span>
        <span>
          <button onClick={() => dispatch(delettodo(todo.id))}>hapus</button>
        </span>
      </div>
    </div>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addtodo(newTitle));
    setNewTitle("");
  };

  return (
    <div className="Home ">
      <h1>TODOLIST .</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="text"
          type="text"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <button type="sumbit">ADD</button>
      </form>
      {render}
    </div>
  );
}
