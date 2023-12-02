import React from "react";

const AddTodo = () => {
  return (
    <div className="container todo_items_continer mb-4">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
