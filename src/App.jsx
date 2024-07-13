import "./App.css";
import BackgroundImage from "./components/BackgroundImage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SideBar from "./components/SideBar";
import ItemContextProvider from "./contexts/ItemContextProvider";

function App() {
  
  return (
    <>
      <BackgroundImage />
      <ItemContextProvider>
      <main>
        <Header />
        <ItemList/>
        <SideBar/>
      </main>
      </ItemContextProvider>
      <Footer />
    </>
  );
}

export default App;
