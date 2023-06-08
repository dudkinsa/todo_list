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
      id: 1,
      title: 'first todo',
      status: true,
    },
  ]);
  return (
    <>
      <Header />
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
