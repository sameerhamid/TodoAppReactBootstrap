import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemContextProvider from "./store/todo-items-store";

function App() {
  // const [todoItems, setTodoItems] = useState([]);
  // const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  // const addNewItem = (itemName, itemDueDate) => {
  //   let id = 0;
  //   if (todoItems.length == 0) {
  //     id = 0;
  //   } else {
  //     id = todoItems[todoItems.length - 1].id + 1;
  //   }
  //   if (itemName !== "" && itemDueDate !== "") {
  //     // const newItem = { id: id, name: itemName, dueDate: itemDueDate };
  //     // setTodoItems((prevItem) => [...prevItem, newItem]);

  //     const newItemAction = {
  //       type: "ADD_TODO",
  //       payload: {
  //         id: id,
  //         name: itemName,
  //         dueDate: itemDueDate,
  //       },
  //     };

  //     dispatchTodoItems(newItemAction);
  //   }
  // };

  // const deleteItem = (todoItemId) => {
  //   // setTodoItems((prevItems) =>
  //   //   prevItems.filter((item) => item.id != todoItemId)
  //   // );
  //   const deletedItemAction = {
  //     type: "DELETE",
  //     id: todoItemId,
  //   };
  //   dispatchTodoItems(deletedItemAction);
  // };

  return (
    <TodoItemContextProvider>
      <center className="todo_container">
        <AppName />
        <AddTodo />
        <div>
          <WelcomeMessage />

          <TodoItems />
        </div>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
