import React from "react";
import Todo from "./todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((el) => {
        return <Todo todo={el} key={el.id} />;
      })}
    </div>
  );
};

export default TodoList;
