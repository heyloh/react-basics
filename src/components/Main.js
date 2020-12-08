import React, { useState } from 'react';
import { FiPlus, FiEdit, FiDelete } from 'react-icons/fi';

import './Main.css';

function Main() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleChangeInput(e) {
    return setNewTodo(e.target.value);
  }

  function handleAddTodo(e) {
    e.preventDefault();
    const formatedNewTodo = newTodo.trim();

    if (todoList.indexOf(formatedNewTodo) !== -1) return;

    setTodoList([...todoList, formatedNewTodo]);
  }

  function handleDeleteTodo(e, index) {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList([...newTodos]);
  }

  function handleEditTodo(e, index) {
    console.log('Delete', index);
  }

  return (
    <div className="main">
      <h1>Lista de Tarefas</h1>

      <form action="#">
        <input type="text" onChange={handleChangeInput} />
        <button type="submit" onClick={handleAddTodo}>
          <FiPlus size={26} color="#FFF" />
        </button>
      </form>

      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li key={todo}>
            •
            {' '}
            {todo}
            <div>
              <FiEdit
                className="edit"
                size={26}
                color="#a7c0b2"
                onClick={(e) => handleEditTodo(e, index)}
              />
              <FiDelete
                className="delete"
                size={26}
                color="#c68384"
                onClick={(e) => handleDeleteTodo(e, index)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
