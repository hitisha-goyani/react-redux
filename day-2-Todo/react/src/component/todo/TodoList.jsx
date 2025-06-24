
import { useDispatch, useSelector } from 'react-redux';
import { handleDelete, handleStatus, saveEdit, startEdit, updateEditText } from '../../reducer/Action';


const TodoList = () => {
  const todo = useSelector((state)=>state.todo)
    const dispatch = useDispatch()

    


    return (
        <div>
            <div className="max-w-sm mx-auto my-10 ">
                <table className="table-auto " >
                    <tr className=''>
                        <th className='px-4 py-2 border bg-indigo-300'>Id</th>
                        <th className='px-4 py-2 border bg-indigo-300'>Todo</th>
                        <th className='px-4 py-2 border bg-indigo-300'>status</th>
                        <th className='px-4 py-2 border bg-indigo-300'>Delete</th>
                    </tr>
                    {
                        todo?.map((ele)=>(
                            <tr key={ele.id}>
                                <td className='px-4 py-2 border bg-indigo-200'>{ele.id}</td>
                                <td className='px-4 py-2 border bg-indigo-200'>
                                    {
                                        ele.editId ?(
                                        <input
                                            value={ele.editText}
                                            onChange={(e) =>
                                                dispatch(updateEditText(ele.id, e.target.value))
                                            }
                                        />
                                    ) : (
                                        ele.text
                                    )}
                                    </td>
                                <td className='px-4 py-2 border bg-indigo-200'><button onClick={()=> dispatch(handleStatus(ele.id))} >{ele.status ? "✅" : "❌"}</button></td>
                                 <td className='px-4 py-2 border bg-indigo-200'>
                                     {ele.isEditing ? (
                                        <button onClick={() => dispatch(saveEdit(ele.id))}>
                                            💾
                                        </button>
                                    ) : (
                                        <button onClick={() => dispatch(startEdit(ele.id))}>
                                            ✏️
                                        </button>
                                    )}
                                 </td>
                               
                                <td className='px-4 py-2 border bg-indigo-200'><button onClick={() => dispatch(handleDelete(ele.id))}>🗑️</button></td>
                            </tr>
                        ))
                    }
                </table>


            </div>
        </div>
    );
}

export default TodoList;

