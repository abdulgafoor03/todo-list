import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SideBar from "./components/SideBar";
import Logo from "./components/Logo";
import Counter from "./components/Counter";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getItemSelector } from "./redux/toDoSlice";

function App() {
  const items=useSelector(getItemSelector);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  

  return (
    <>
      <BackgroundImage />
      <main>
        <Header>
          <Logo />
          <Counter
            totalNumberOfItems={items.length}
            numberOfItemsPacked={
              items.filter((li) => {
                return li.packed;
              }).length
            }
          />
        </Header>
        <ItemList list={items} />
        <SideBar/>
      </main>

      <Footer />
    </>
  );
}

export default App;
