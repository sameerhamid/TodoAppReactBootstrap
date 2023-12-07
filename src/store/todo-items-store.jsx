import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (state, action) => {
  let newTodo = state;
  if (action.type === "ADD_TODO") {
    newTodo = [
      ...newTodo,
      {
        id: action.payload.id,
        name: action.payload.name,
        dueDate: action.payload.dueDate,
      },
    ];
  } else if (action.type === "DELETE") {
    newTodo = state.filter((item) => item.id !== action.id);
  }

  return newTodo;
};

const TodoItemContextProvider = (props) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    let id = 0;
    if (todoItems.length == 0) {
      id = 0;
    } else {
      id = todoItems[todoItems.length - 1].id + 1;
    }
    if (itemName !== "" && itemDueDate !== "") {
      // const newItem = { id: id, name: itemName, dueDate: itemDueDate };
      // setTodoItems((prevItem) => [...prevItem, newItem]);

      const newItemAction = {
        type: "ADD_TODO",
        payload: {
          id: id,
          name: itemName,
          dueDate: itemDueDate,
        },
      };

      dispatchTodoItems(newItemAction);
    }
  };

  const deleteItem = (todoItemId) => {
    // setTodoItems((prevItems) =>
    //   prevItems.filter((item) => item.id != todoItemId)
    // );
    const deletedItemAction = {
      type: "DELETE",
      id: todoItemId,
    };
    dispatchTodoItems(deletedItemAction);
  };
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {props.children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemContextProvider;
