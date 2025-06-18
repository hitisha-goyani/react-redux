import { DEC, INC, RESET } from "./Action";

export const Reducer = (store = { count: 0 }, action) => {

  switch (action.type) {
    case INC:
      return {
        ...store,
        count: store.count + 1,
      };
      break;

    case DEC:
      return {
        ...store,
        count: store.count - 1,
      };
      break;

    case RESET:
      return {
        ...store,
        count: 0,
      };
      break;

    default:
      return { ...store };
  }

  return store;
};
