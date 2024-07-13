import { ItemsContext } from "../contexts/ItemContextProvider";
import { useContext } from "react";

export default function UseItemsContext() {
  const context = useContext(ItemsContext);

  if(!context){
    throw new Error("useItemsContext must be used in the itemsContextprovider")
  }
  return context;
}
