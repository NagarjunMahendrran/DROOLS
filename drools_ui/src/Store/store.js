import { createStore } from "redux";
import rootReducer from "./reducers";
import * as keys from "../Actions/ActionKeys"



export default createStore(state = keys.initialState ,rootReducer);
