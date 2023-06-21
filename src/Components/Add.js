import React, { useState } from "react";
import { addTodo } from "../Reduc/todoSlice";
import { useDispatch } from "react-redux";

const Add = () => {
  // dispatch

  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");
  const changeHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Math.random(),
        task: newTodo,
        isDone: false,
        isEdited: false,
      })
    );
    setNewTodo("");
  };

  return (
    <div>
      <form onSubmit={addHandler}>
        <input
          type="text"
          name="task"
          onChange={changeHandler}
          value={newTodo}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Add;
