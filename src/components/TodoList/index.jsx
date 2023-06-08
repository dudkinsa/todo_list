import React from 'react'

function TodoList({todo, setTodo}) {

  const deleteTodo = (id) => {
  let newTodo = [...todo].filter(item => item.id!==id)
  setTodo(newTodo)
  }

  return (
   todo.map((item) => (
  <div key={item.id}>
    <div>{item.title}</div>
    <button onClick={() =>  deleteTodo(item.id)}>Удалить</button>
  </div>
    
   ))
  )
}

export default TodoList