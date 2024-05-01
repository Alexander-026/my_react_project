import React, { FC } from "react";
import styles from "./ListsComponent.module.scss";
import { Item } from "../../types/item";

// Define the props interface for ListsComponent
interface IListsComponentProps {
  items: Item[]; // Array of items to render in the lists
  classname?: string; // Optional additional class for styling
}

// Define the ListsComponent functional component
const ListsComponent: FC<IListsComponentProps> = ({ items, classname }) => {
  return (
    <>
      {/* Render an ordered list */}
      <ol className={`${styles.list} ${classname}`}>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li> // Render each item as an <li> element
        ))}
      </ol>

      {/* Render an unordered list */}
      <ul className={`${styles.list} ${classname}`}>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li> // Render each item as an <li> element
        ))}
      </ul>
    </>
  );
};

export default ListsComponent;
