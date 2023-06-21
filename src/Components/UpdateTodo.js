import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, editTodo } from "../Reduc/todoSlice";

const UpdateTodo = ({ todotask, todoid }) => {
  const [updatedTask, setUpdatedTask] = useState(todotask);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setUpdatedTask(e.target.value);
  };
  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: todoid, task: updatedTask }));
    dispatch(editTodo(todoid));
  };
  return (
    <div>
      <form onSubmit={updateHandler}>
        <input defaultValue={todotask} onChange={changeHandler} />
        <button type="submit">Update</button>
        <button
          onClick={() => {
            dispatch(editTodo(todoid));
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;
