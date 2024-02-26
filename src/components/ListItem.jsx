import { useState } from "react";

const ListItem = (props) => {
  const [swapClassOnClick, setSwapClassOnClick] = useState("false");

  const setStyle = () => {
    setSwapClassOnClick(!swapClassOnClick);
  };

  return (
    <li>
      <div>
        <p
          className={swapClassOnClick ? "some class name" : "completed"}
          onClick={setStyle}
        >
          {props.listItems}
        </p>
        <a href="#" onClick={() => props.deleteListItem(props.index)}>
          Delete Task
        </a>
      </div>
    </li>
  );
};

export default ListItem;
