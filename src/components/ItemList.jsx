import EmptyView from "./EmptyVIew";
import Select from "react-select";
import { useMemo, useState } from "react";
import UseItemsContext from "../hooks/UseItemsContext";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList() {
  const { list, handleDeleteItem, handleSelectedItem } = UseItemsContext();
  const [sortBy, setSortBy] = useState("default");
  const sortedItem = useMemo(
    () =>
      [...list].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [list, sortBy]
  );

  return (
    <ul className="item-list">
      {list.length === 0 ? <EmptyView /> : null}
      {list.length > 0 ? (
        <section className="sorting">
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      ) : null}
      {sortedItem.map((item, i) => {
        return (
          <Item
            key={i}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleSelectedItem={handleSelectedItem}
          />
        );
      })}
    </ul>
  );
}
const Item = ({ item, handleDeleteItem, handleSelectedItem }) => {
  return (
    <li className="item">
      <label onClick={() => handleSelectedItem(item.id)}>
        <input type="checkbox" checked={item.packed}></input>
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};
