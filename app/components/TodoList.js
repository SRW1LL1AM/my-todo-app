import React from 'react';
 
const TodoList = ({ todos, deleteTodo, title }) => {

  return (
    <ul>
      <h2 className='text-3xl'>{title}</h2>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button href={'#'} onClick={() => deleteTodo(todo.id)}>Apagar</button>
        </li>
      ))}
    </ul>
  );
};
 
export default TodoList;