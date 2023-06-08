import React from 'react';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = React.useState([
    {
      id: 1,
      title: 'first todo',
      status: true,
    },
    {
      id: 2,
      title: 'second todo',
      status: true,
    },
    {
      id: 3,
      title: ' third todo',
      status: false,
    },
  ]);
  return (
    <>
      <Header />
      <AddTodo />
      <TodoList todo ={todo} setTodo = {setTodo}/>
    </>
  );
}

export default App;
