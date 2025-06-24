import { ADD_TODO, DELETE_TODO, SAVE_EDIT, START_EDIT, UPDATE_EDIT_TEXT, UPDATE_STATUS } from "./Action";

export const reducerTodo = (store = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      let obj = {
        id: store.length == 0 ? 0 : store[store.length - 1].id + 1,
        text: action.payload.to,
        status: false,
      };
      store.push(obj);
      break;

    case UPDATE_STATUS:
      store = store.map((ele) =>
        ele.id == action.payload.id ? { ...ele, status: !ele.status } : ele
      );
      break;

    case DELETE_TODO:
      store = store.filter((ele) => ele.id != action.payload.id);
      break;

 case START_EDIT:
  const current = state.todo.find(t => t.id === action.payload);
      return { ...store, editId: action.payload, editText: current.text };

    case UPDATE_EDIT_TEXT:
      return { ...store, editText: action.payload };

    case SAVE_EDIT:
      return {
        ...store,
        todo: store.todo.map((t) =>
          t.id === store.editId ? { ...t, text: store.editText } : t
        ),
        editId: null,
        editText: '',
      };

    default:
      store;
  }

  return [...store];
};
