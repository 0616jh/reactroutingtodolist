import ListItem from "./ListItem";

const List = ({ listItems, deleteListItem }) => {
  return (
    <ul>
      {listItems.map((item, index) => (
        <ListItem
          key={index}
          listItems={item}
          deleteListItem={() => deleteListItem(index)}
        />
      ))}
    </ul>
  );
};

export default List;
