import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

const AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <h1>Todo App</h1>
      <form
        className='form-inline'
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        <div className='form-group'>
        <input className='form-control' ref={node => input = node} placeholder="What needs to be done?"/>
        </div>
        <button className='btn btn-info' type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)