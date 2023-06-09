import React from 'react';

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = React.useState(null);

  const deleteTodo = (id) => {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  const statusTodo = (id) => {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  };

  const editTodo = (id) => {
    setEdit(id);
  };

  return (
    <>
      {todo.map((item) => (
        <div key={item.id}>
          {edit === item.id ? (
            <div>
              <input />
              <button>Сохранить</button>
            </div>
          ) : (
            <div>{item.title}</div>
          )}
          {edit === item.id ? (
            <div>
              <button>Сохранить</button>
            </div>
          ) : (
            <div>
              <button onClick={() => deleteTodo(item.id)}>Удалить</button>
              <button onClick={() => editTodo(item.id)}>Редактировать</button>
              <button onClick={() => statusTodo(item.id)}>Закрыть</button>
              {/*  */}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default TodoList;
