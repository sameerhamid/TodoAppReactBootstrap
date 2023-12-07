import React, { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const AddTodo = ({ handleNewItem }) => {
  // const [inputVal, setInputVal] = useState("");
  // const [date, setDate] = useState("");

  const itemNameRef = useRef("");
  const itemDateRef = useRef("");

  const { addNewItem } = useContext(TodoItemsContext);
  const handleButtonClicked = (e) => {
    e.preventDefault();
    addNewItem(itemNameRef.current.value, itemDateRef.current.value);
    itemNameRef.current.value = "";
    itemDateRef.current.value = "";
  };
  return (
    <div className="container todo_items_continer mb-4">
      <form className="row" onSubmit={handleButtonClicked}>
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
