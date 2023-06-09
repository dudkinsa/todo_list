import React from 'react'

function TodoList({todo, setTodo}) {

  const deleteTodo = (id) => {
  let newTodo = [...todo].filter(item => item.id!==id)
  setTodo(newTodo)
  }

  const statusTodo = (id) => {
    let newTodo = [...todo].filter(item => {
      if(item.id === id){
        item.status = !item.status
      }
      return item;
    })
    setTodo(newTodo);
  }


  return (
   todo.map((item) => (
  <div key={item.id}>
    <div>{item.title}</div>
    <button onClick={() =>  deleteTodo(item.id)}>Удалить</button>
    <button onClick={() =>  statusTodo(item.id)}>Закрыть</button>
  </div>
    
   ))
  )
}

export default TodoList