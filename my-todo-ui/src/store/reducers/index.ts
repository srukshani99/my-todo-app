import { combineReducers } from "redux";
import todoStore from "./todo.store";

export default combineReducers({
    mytodo: todoStore.reducer 
})