import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initialItems = [
    { id: 0, name: "Buy Milk", dueDate: "09/01/2023" },
    { id: 1, name: "Buy Ghee", dueDate: "09/01/2023" },
    { id: 2, name: "Buy Abc", dueDate: "09/01/2023" },
  ];
  const [todoItems, setTodoItems] = useState(initialItems);

  const handleNewItem = (itemName, itemDueDate) => {
    let id = 0;
    if (itemName !== "" && itemDueDate !== "") {
      if (todoItems.length == 0) {
        id = 0;
      } else {
        id = todoItems[todoItems.length - 1].id + 1;
      }
      const newItem = { id: id, name: itemName, dueDate: itemDueDate };
      setTodoItems([...todoItems, newItem]);
    }
  };

  const handleDelete = (todoItemId) => {
    setTodoItems(todoItems.filter((item) => item.id != todoItemId));
  };

  return (
    <center className="todo_container">
      <AppName />
      <AddTodo
        setTodoItems={setTodoItems}
        todoItems={todoItems}
        handleNewItem={handleNewItem}
      />
      <div>
        {todoItems.length === 0 ? (
          <WelcomeMessage />
        ) : (
          <TodoItems todoItems={todoItems} handleDelete={handleDelete} />
        )}
      </div>
    </center>
  );
}

export default App;
