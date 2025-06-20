import { createStore } from "redux"
import { ReducerTodo } from "./Reducer"

export const store = createStore(ReducerTodo)