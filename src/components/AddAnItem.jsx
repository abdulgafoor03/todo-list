import { useRef, useState } from "react";
import Button from "./Button";

export default function AddAnItem({ handleAddItem }) {
  const [itemText, setItemText] = useState();
  const inputRef=useRef('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!itemText){
        alert('the input cannot be empty!');
        inputRef.current.focus();
        return;
    }

    handleAddItem(itemText);
    setItemText('');

  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <h2>Add an item</h2>
      <input
        type="text"
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        ref={inputRef}
        autoFocus
      />
      <Button className="btn" text={"Add to List"}></Button>
    </form>
  );
}
