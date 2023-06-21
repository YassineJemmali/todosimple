import React from "react";
import { deleteTodo, completeTodo, editTodo } from "../Reduc/todoSlice";
import { useDispatch } from "react-redux";
import UpdateTodo from "./UpdateTodo";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const completeHandler = () => {
    dispatch(completeTodo(todo.id));
  };

  const editHandler = () => {
    dispatch(editTodo(todo.id));
  };

  return (
    <div>
      {todo.isDone ? (
        <p style={{ color: "green" }}>{todo.task}</p>
      ) : (
        <p style={{ color: "red" }}>{todo.task}</p>
      )}
      {todo.isEdited && <UpdateTodo todotask={todo.task} todoid={todo.id} />}

      <button onClick={completeHandler}>
        {todo.isDone ? "Undone" : "Done"}
      </button>
      <button onClick={editHandler}>Edit</button>
      <button
        onClick={() => {
          dispatch(deleteTodo(todo.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
