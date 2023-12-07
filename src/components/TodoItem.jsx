import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todo, handleDelete }) => {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container  todo_items_continer">
      <div className="row mt-2">
        <div className="col-6">{todo?.name}</div>
        <div className="col-4">{todo?.dueDate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger"
            onClick={() => deleteItem(todo.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
