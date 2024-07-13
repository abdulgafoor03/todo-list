import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SideBar from "./components/SideBar";
import Logo from "./components/Logo";
import Counter from "./components/Counter";
import { useEffect, useState } from "react";
import { DefaultList } from "../src/resources/defaultList";

function App() {
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
    <>
      <BackgroundImage />
      <main>
        <Header>
          <Logo />
          <Counter
            totalNumberOfItems={list.length}
            numberOfItemsPacked={
              list.filter((li) => {
                return li.packed;
              }).length
            }
          />
        </Header>
        <ItemList
          list={list}
          handleDeleteItem={handleDeleteItem}
          handleSelectedItem={handleSelectedItem}
        />
        <SideBar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetAllInitials={handleResetAllInitials}
          handleAllMarkComplete={handleAllMarkComplete}
          handleAllMarkInComplete={handleAllMarkInComplete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
