import { useState } from 'react';
import './App.css';
import { TodoProvider } from './TodoProvider';

function App() {
  let [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  let items = [];
  let update = false;
  const addTodo = () => {
    setTodos((prev) => [...prev, value]);
  };

  const saveTodo = (index_) => {
    const value_ = document.getElementById('input_value' + index_).value;

    todos = todos.map((t, index) => (index == index_ ? value_ : t));
    setTodos(todos);
    document.getElementById('label' + index_).style.display = 'block';
    document.getElementById('input' + index_).style.display = 'none';
  };

  const deleteTodo = (index1) => {
    console.log(index1);
    todos = todos.filter((item, index) => index !== index1);
    setTodos(todos);
  };

  const updateTodo = (index) => {
    update = true;
    const value_ = document.getElementById('label_value' + index).innerText;

    document.getElementById('label' + index).style.display = 'none';
    document.getElementById('input' + index).style.display = 'block';
    document.getElementById('input_value' + index).value = value_;
  };
  return (
    <>
    <h2>Todo List</h2>
      <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo }}>
        <input type="text" onKeyUp={(e) => setValue(e.target.value)} />
        <button onClick={() => addTodo()}>Add</button>
        <hr />
        <ul>
          {todos.map((t, index) => (
            <li key={index}>
              <div id={'input' + index} style={{ display: 'none' }}>
                <input type="text" id={'input_value' + index} /> &nbsp;
                <button onClick={() => saveTodo(index)}>Save</button>
              </div>
              <div id={'label' + index}>
                <label id={'label_value' + index}>{t}</label>
                <button id={'update' + index} onClick={() => updateTodo(index)}>
                  Edit
                </button>
              </div>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </TodoProvider>
    </>
  );
}

export default App;
