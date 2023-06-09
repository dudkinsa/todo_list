import React from 'react'

function AddTodo({todo, setTodo}) {

  const [value, setValue] = React.useState('');


  const saveTodo = () => {
    setTodo(
      [...todo, {
        id: 4,
        title: value,
        status: true
      }]
    )
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