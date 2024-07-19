import { createSelector, createSlice } from "@reduxjs/toolkit";
import { DefaultList } from "../resources/defaultList";

export const toDoSlice = createSlice({
  name: "todo",
  initialState: JSON.parse(localStorage.getItem('items')) || DefaultList,
  reducers: {
    handleAddToDo: (state, action) => {
      state.push(action.payload);
    },
    handleRemoveAll: (state) => {
      state.length = 0;
    },
    handleResetInitial: (state) => {
      state.length = 0;
      state.push(...DefaultList);
    },
    handleMarkAll: (state) => {
      return state.map((li) => {
        return { ...li, packed: true };
      });
    },
    handleUnMarkAll: (state) => {
      return state.map((li) => {
        return { ...li, packed: false };
      });
    },
    handleDelete:(state,action)=>{
        return state.filter((li) => li.id !== action.payload);
    },
    handleSelected:(state,action)=>{
        return state.map((li) => {
            if (li.id == action.payload) {
              return { ...li, packed: !li.packed };
            }
            return li;
          });
    }
  },
});
export const getItemSelector= createSelector(state=>state.toDo,state=>state)

export const {
  handleAddToDo,
  handleRemoveAll,
  handleResetInitial,
  handleMarkAll,
  handleUnMarkAll,
  handleDelete,
  handleSelected
} = toDoSlice.actions;
export default toDoSlice.reducer;
