import React from "react";

import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";


const App = () => {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      completed: false,
      title: `Оперативная память`,
    },
    {
      id: 2,
      completed: false,
      title: `SSD`,
    },
    {
      id: 3,
      completed: false,
      title: `HDD`,
    },
    {
      id: 4,
      completed: false,
      title: `Процессор`,
    },
    {
      id: 5,
      completed: false,
      title: `Кулер`,
    },
  ]);

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    }))
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    setTodos(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false,
      },
    ]))
  }
  
  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>React tutorial</h1>

        <AddTodo onCreate={addTodo} />

        {todos.length
          ? <TodoList
              todos={todos}
              btnToggle={toggleTodo}
            />
          : <p>No todos!</p>
        }
      </div>
    </Context.Provider>
  );
}


export default App;
