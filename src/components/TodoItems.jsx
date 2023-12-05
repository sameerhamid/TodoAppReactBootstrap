import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, handleDelete }) => {
  return (
    <div>
      {todoItems?.map((todo) => (
        <TodoItem todo={todo} key={todo.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TodoItems;
