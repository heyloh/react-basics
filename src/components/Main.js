import React, { useState, useEffect } from 'react';
import { FiPlus, FiEdit, FiDelete } from 'react-icons/fi';

import './Main.css';

function Main() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [todoIndex, setTodoIndex] = useState(-1);

  useEffect(() => {
    const todosStorage = JSON.parse(localStorage.getItem('todoList'));
    if (!todosStorage) return;
    setTodoList([...todosStorage]);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList, todoIndex]);

  function handleChangeInput(e) {
    return setNewTodo(e.target.value);
  }

  function handleAddTodo(e) {
    e.preventDefault();
    const formatedNewTodo = newTodo.trim();

    if (todoList.indexOf(formatedNewTodo) !== -1) return;

    if (todoIndex === -1) {
      setTodoList([...todoList, formatedNewTodo]);
      setNewTodo('');
    } else {
      todoList[todoIndex] = newTodo;
      setNewTodo('');
      setTodoIndex(-1);
    }
  }

  function handleDeleteTodo(e, index) {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList([...newTodos]);
  }

  function handleEditTodo(e, index) {
    setTodoIndex(index);
    setNewTodo(todoList[index]);
  }

  return (
    <div className="main">
      <h1>Lista de Tarefas</h1>

      <form action="#">
        <input type="text" value={newTodo} onChange={handleChangeInput} />
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
