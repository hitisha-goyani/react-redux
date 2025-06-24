import { combineReducers, createStore } from "redux";
import{reducerTodo} from "./reducer/Reducer"



const rootReducer = combineReducers({
        todo:reducerTodo,
    
})

// export const store = createStore(Reducer)
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
