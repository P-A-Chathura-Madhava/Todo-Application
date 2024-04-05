import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';
import { FaTrashAlt } from "react-icons/fa";

function Todos() {

    const todoState = useSelector((state)=>state.todos.todos)
    // console.log(todoState);
    const dispatch = useDispatch();

  return (
    <>
        <div>Todos</div>
        {
            todoState.map((todo)=>{
                return(<>
                    <div className='flex items-center justify-center gap-4'>
                        <div key={todo.id}>{todo.text}</div>
                        <button onClick={()=>dispatch(removeTodo(todo.id))}><FaTrashAlt className='text-2xl text-red-600' /></button>
                    </div>
                </>)
            })
        }
    </>    
  )
}

export default Todos