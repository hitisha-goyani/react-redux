import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleAdd } from '../../reducer/Action';
import TodoList from './TodoList';



const Todo = () => {

    const [to, setTo] = useState("")

    const dispatch = useDispatch()
    const todoData = useSelector((store)=>store)

    console.log(todoData)

    return (
        <>
        <h1 className='text-black font-bold text-2xl text-center mt-4'>Todo</h1>
        <div className='max-w-sm mx-auto border rounded-3 p-2 flex gap-4 rounded-2xl mt-5 justify-between'>
            <input type="text" value={to} onChange={(e)=> setTo(e.target.value)} className='border p-2 rounded-2xl' />
            <button  onClick={() => dispatch(handleAdd(to))} className='border text-black py-1 px-4 bg-indigo-400 hover:bg-indigo-500 focus:bg-indigo-600  rounded-2xl '>Add</button>
        </div>
       <TodoList/>
        </>
    );
}

export default Todo