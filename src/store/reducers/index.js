import { combineReducers } from "redux";

import  auth  from "./authReducer";
import  reg  from "./regReducer";
import list from "./listReducer";

export default combineReducers({
    auth,
    list,
    reg
})