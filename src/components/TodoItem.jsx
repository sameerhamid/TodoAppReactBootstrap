import React from "react";

const TodoItem = ({ todo, date }) => {
  return (
    <div className="container  todo_items_continer">
      <div className="row mt-2">
        <div className="col-6">{todo}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
