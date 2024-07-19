
import AddAnItem from "./AddAnItem";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";


export default function SideBar() {
  const btnGroup = [
    { text: "Mark all as complete",id:"markAll"},
    { text: "Mark all as incomplete",id:'unMarkAll' },
    { text: "Reset as inital",id:'resetInital' },
    { text: "Remove all items",id:'removeAll'},
  ]; 
  return (
    <div className="sidebar">
      <AddAnItem />
      <ButtonGroup>
        {btnGroup.map((btn,i)=>{
           return ( <Button key={i+btn.text} text={btn.text} buttonType='secondary' id={btn.id}/>)
        })}
      </ButtonGroup>
    </div>
  );
}
