import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <center className="todo_container">
      <AppName />
      <AddTodo />

      <TodoItem todo="Buy Ghee" date="02-08-2201" />
      <TodoItem todo="Buy Milk" date="02-08-2201" />
    </center>
  );
}

export default App;
