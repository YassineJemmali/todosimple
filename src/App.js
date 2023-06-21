import "./App.css";
import Add from "./Components/Add";
import Filter from "./Components/Filter";
import TodoList from "./Components/todoList";
import { useSelector } from "react-redux";

function App() {
  const { todos } = useSelector((state) => state.todo);
  const { FilterItems } = useSelector((state) => state.todo);
  return (
    <div className="App">
      <h2>TODO List</h2>

      <Filter />
      <br />

      <Add />
      <br />

      <TodoList
        todos={
          FilterItems === "Done"
            ? todos.filter((el) => el.isDone === true)
            : FilterItems === "Undone"
            ? todos.filter((el) => el.isDone === false)
            : todos
        }
      />
    </div>
  );
}

export default App;
