import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    let id = 0;
    if (itemName !== "" && itemDueDate !== "") {
      if (todoItems.length == 0) {
        id = 0;
      } else {
        id = todoItems[todoItems.length - 1].id + 1;
      }
      const newItem = { id: id, name: itemName, dueDate: itemDueDate };
      setTodoItems((prevItem) => [...prevItem, newItem]);
    }
  };

  const deleteItem = (todoItemId) => {
    setTodoItems((prevItems) =>
      prevItems.filter((item) => item.id != todoItemId)
    );
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <center className="todo_container">
        <AppName />
        <AddTodo setTodoItems={setTodoItems} todoItems={todoItems} />
        <div>
          <WelcomeMessage />

          <TodoItems />
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
