import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div>
      {todoItems.length === 0 && (
        <h1 className="welcome-message">No Todos! Enjoy your day</h1>
      )}
    </div>
  );
};

export default WelcomeMessage;
