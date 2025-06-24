export const ADD_TODO = "ADD_TODO"
export const UPDATE_STATUS = "UPDATE_STATUS"
export const DELETE_TODO = "DELETE_TODO"
export const START_EDIT = "START_EDIT"
export const UPDATE_EDIT_TEXT = "UPDATE_EDIT_TEXT"
export const SAVE_EDIT = "SAVE_EDIT"

export function handleAdd(to){

    return {
        type:ADD_TODO,
        payload:{
            to
        }
    }

}

export function handleStatus(id){
    return {
        type:UPDATE_STATUS,
        payload:{
            id
        }
    }
}

export function handleDelete(id){
    return {
        type:DELETE_TODO,
        payload:{
            id
        }
    }
}

export const startEdit = (id) => ({
  type: 'START_EDIT',
  payload: id,
});

export const updateEditText = (text) => ({
  type: 'UPDATE_EDIT_TEXT',
  payload: text,
});

export const saveEdit = () => ({
  type: 'SAVE_EDIT',
});