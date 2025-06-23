
import { createStore } from "redux";
import { productReducer } from "./Reducer";


export const store = createStore(productReducer)