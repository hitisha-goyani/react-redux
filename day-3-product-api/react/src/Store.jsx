
import { createStore } from "redux";
import { productReducer } from "./component/redux/Reducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
   
        products:productReducer
})

// export const store = createStore(Reducer)
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
