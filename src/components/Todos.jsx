import React from 'react'
import { useSelector } from 'react-redux'

function Todos() {

    const todoState = useSelector((state)=>state.todos.todos)
    console.log(todoState);

  return (
    <>
        <div>Todos</div>
        {
            todoState.map((todo)=>{
                return(<>
                    <div className='flex items-center justify-center gap-4'>
                        <div key={todo.id}>{todo.text}</div>
                        <button>Remove</button>
                    </div>
                </>)
            })
        }
    </>    
  )
}

export default Todos