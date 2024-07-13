import UseItemsContext from "../hooks/UseItemsContext";

export default function Counter() {
  const { list } = UseItemsContext;
  return (
    <p>
      <b>
        {
          list.filter((li) => {
            return li.packed;
          }).length
        }
      </b>
      /{list.length} items packed
    </p>
  );
}
