import React from "react";

const TodoItem = ({ todo, handleDelete }) => {
  return (
    <div className="container  todo_items_continer">
      <div className="row mt-2">
        <div className="col-6">{todo?.name}</div>
        <div className="col-4">{todo?.dueDate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(todo.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
