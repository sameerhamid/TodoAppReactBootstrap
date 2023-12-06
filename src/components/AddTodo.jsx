import React, { useRef, useState } from "react";

const AddTodo = ({ handleNewItem }) => {
  // const [inputVal, setInputVal] = useState("");
  // const [date, setDate] = useState("");

  const itemNameRef = useRef("");
  const itemDateRef = useRef("");

  const handleButtonClicked = (e, itemName, ItemDate) => {
    e.preventDefault();
    handleNewItem(itemName.current.value, ItemDate.current.value);
    itemNameRef.current.value = "";
    itemDateRef.current.value = "";
  };
  return (
    <div className="container todo_items_continer mb-4">
      <form
        className="row"
        onSubmit={(e) => handleButtonClicked(e, itemNameRef, itemDateRef)}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" ref={itemNameRef} />
        </div>
        <div className="col-4">
          <input type="date" ref={itemDateRef} />
        </div>
        <div className="col-2">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
