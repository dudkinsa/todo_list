import React from 'react'
import uuid from 'react-uuid';

function AddTodo({todo, setTodo}) {

  const [value, setValue] = React.useState('');

  const id = () => {
   return uuid()
  }


  const saveTodo = () => {
    setTodo(
      [...todo, {
        id: id(),
        title: value,
        status: true
      }]
    )
    setValue('');
  }

  return <>
    <div>
      <input  
      placeholder='Введите задачу' 
      value = {value}
      onChange = {(event) => setValue(event.target.value)}
      />
      <button onClick={saveTodo}>Сохранить</button>
    </div>
  </>
  
}

export default AddTodo