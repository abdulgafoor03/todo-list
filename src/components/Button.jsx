import { useDispatch } from "react-redux";
import { handleRemoveAll,handleResetInitial,handleMarkAll,handleUnMarkAll } from "../redux/toDoSlice";


export default function Button({text, buttonType,id}) {
  const dispatch = useDispatch();
  const handleClick=(e)=>{
    switch(e.target.id){
      case 'removeAll':
        dispatch(handleRemoveAll());
        break;
      case 'resetInital':
        dispatch(handleResetInitial());
        break;
      case 'markAll':
        dispatch(handleMarkAll())
        break;
      case 'unMarkAll':
        dispatch(handleUnMarkAll())
        break;
    }
  }
  return (
    <button className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`} id={id} onClick={handleClick}>{text}</button>
  )
}
