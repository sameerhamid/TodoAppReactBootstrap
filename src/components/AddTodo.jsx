import React, { useState } from "react";

const AddTodo = ({ handleNewItem }) => {
  const [inputVal, setInputVal] = useState("");
  const [date, setDate] = useState("");

  const handleButtonClicked = (itemName, ItemDate) => {
    handleNewItem(itemName, ItemDate);
    setInputVal("");
    setDate("");
  };
  return (
    <div className="container todo_items_continer mb-4">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-primary"
            onClick={() => handleButtonClicked(inputVal, date)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
