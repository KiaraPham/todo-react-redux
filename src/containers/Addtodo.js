import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

const AddTodo = ({dispatch}) => {
  let input
  return (
    <div>
      <h1>todos</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
        <input ref={node => input = node} placeholder="What needs to be done?"/>
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)