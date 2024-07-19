import EmptyView from "./EmptyVIew";
import Select from "react-select";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { handleDelete,handleSelected } from "../redux/toDoSlice";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList({
  list,
}) {
  const [sortBy, setSortBy] = useState("default");
  const sortedItem = useMemo(() => 
    [...list].sort((a, b) => {
      if (sortBy === "packed") {
        return b.packed - a.packed;
      }
      if (sortBy === "unpacked") {
        return a.packed - b.packed;
      }
      return;
    })
  ,[list, sortBy]);

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
          />
        );
      })}
    </ul>
  );
}
const Item = ({ item }) => {
  const dispatch =useDispatch();
  return (
    <li className="item">
      <label onClick={() => dispatch(handleSelected(item.id))}>
        <input type="checkbox" checked={item.packed}></input>
        {item.name}
      </label>
      <button onClick={()=>dispatch(handleDelete(item.id))}>❌</button>
    </li>
  );
};
