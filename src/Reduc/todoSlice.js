import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: Math.random(),
        task: "Apprendre Redux et Redux Toolkit",
        isDone: false,
        isEdited: false,
      },
    ],
    FilterItems: "All",
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
    completeTodo: (state, action) => {
      state.todos.map((el) =>
        el.id === action.payload ? (el.isDone = !el.isDone) : el.isDone
      );
    },
    editTodo: (state, action) => {
      state.todos.map((el) =>
        el.id === action.payload ? (el.isEdited = !el.isEdited) : el.isEdited
      );
    },
    updateTodo: (state, action) => {
      state.todos.map((el) =>
        el.id === action.payload.id ? (el.task = action.payload.task) : el.task
      );
    },
    filterAll: (state) => {
      state.FilterItems = "All";
    },
    filterDone: (state) => {
      state.FilterItems = "Done";
    },
    filterUndone: (state) => {
      state.FilterItems = "Undone";
    },
  },
});

export default todoSlice.reducer;
export const {
  filterAll,
  filterDone,
  filterUndone,
  addTodo,
  deleteTodo,
  completeTodo,
  editTodo,
  updateTodo,
} = todoSlice.actions;
