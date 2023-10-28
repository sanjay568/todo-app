import { createContext, useContext } from 'react';

export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: (index) => {},
  updateTodo: (index, value) => {},
});

export const todoContext = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
