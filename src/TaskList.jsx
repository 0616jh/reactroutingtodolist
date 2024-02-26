import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";

const TaskList = () => {
  const [listItems, setListItems] = useState([]);
  const [taskName, setTaskName] = useState("");

  // event handler for text box value
  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  // update value of listItems on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setListItems([...listItems, taskName]);
    setTaskName("");
  };

  // deletes an individual list item and rerenders the DOM tree
  const deleteListItem = (item) => {
    const updatedList = [...listItems];
    updatedList.splice(item, 1);
    setListItems(updatedList);
  };

  return (
    <div className="container">
      <Header />
      <h2>To-Do List</h2>
      <Form
        listItems={listItems}
        taskName={taskName}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <List listItems={listItems} deleteListItem={deleteListItem} />
    </div>
  );
};

export default TaskList;
