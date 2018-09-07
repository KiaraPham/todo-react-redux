import React from 'react';
import PropTypes from 'prop-types';
import EditTodo from './EditTodo';

const Todo = ({onClick, completed, text, id, editTodo}) => (
  <span className='row'>
    <li
      className='col-lg-10'
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>

    <EditTodo className='col-lg-2' text={text} id={id} editTodo={editTodo}/>
  </span>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo