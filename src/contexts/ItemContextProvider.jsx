import { createContext, useState, useEffect } from "react";
import {DefaultList} from '../resources/defaultList';

export  const ItemsContext = createContext({});
export default function ItemContextProvider({ children }) {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || DefaultList;
  });

  const handleAddItem = (itemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    setList([...list, newItem]);
  };
  const handleRemoveAllItems = () => {
    setList([]);
  };
  const handleResetAllInitials = () => {
    setList(DefaultList);
  };
  const handleAllMarkComplete = () => {
    const newItem = list.map((li) => {
      return { ...li, packed: true };
    });
    setList(newItem);
  };
  const handleAllMarkInComplete = () => {
    const newItem = list.map((li) => {
      return { ...li, packed: false };
    });
    setList(newItem);
  };
  const handleDeleteItem = (id) => {
    const newItem = list.filter((li) => li.id !== id);
    setList(newItem);
  };
  const handleSelectedItem = (id) => {
    const newItem = list.map((li) => {
      if (li.id == id) {
        return { ...li, packed: !li.packed };
      }
      return li;
    });
    setList(newItem);
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(list));
  }, [list]);

  return (
    <ItemsContext.Provider 
      value={{
        list,
        handleAddItem,
        handleRemoveAllItems,
        handleResetAllInitials,
        handleAllMarkComplete,
        handleAllMarkInComplete,
        handleDeleteItem,
        handleSelectedItem,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
