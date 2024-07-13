import UseItemsContext from "../hooks/UseItemsContext";
import AddAnItem from "./AddAnItem";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

export default function SideBar() {
  const {
    handleAddItem,
    handleRemoveAllItems,
    handleResetAllInitials,
    handleAllMarkComplete,
    handleAllMarkInComplete,
  } = UseItemsContext();
  const btnGroup = [
    { text: "Mark all as complete", onClick: handleAllMarkComplete },
    { text: "Mark all as incomplete", onClick: handleAllMarkInComplete },
    { text: "Reset as inital", onClick: handleResetAllInitials },
    { text: "Remove all items", onClick: handleRemoveAllItems },
  ];
  return (
    <div className="sidebar">
      <AddAnItem handleAddItem={handleAddItem} />
      <ButtonGroup>
        {btnGroup.map((btn, i) => {
          return (
            <Button
              key={i + btn.text}
              text={btn.text}
              buttonType="secondary"
              onClick={btn.onClick}
            />
          );
        })}
      </ButtonGroup>
    </div>
  );
}
