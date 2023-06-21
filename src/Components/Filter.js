import React from "react";
import { filterAll, filterDone, filterUndone } from "../Reduc/todoSlice";
import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(filterAll());
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          dispatch(filterDone());
        }}
      >
        Done
      </button>
      <button
        onClick={() => {
          dispatch(filterUndone());
        }}
      >
        Undone
      </button>
    </div>
  );
};

export default Filter;
