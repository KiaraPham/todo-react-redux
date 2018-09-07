import React from 'react'
import {ActionCreators as UndoActionCreators} from 'redux-undo'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

let UndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
  <div>
    <Button onClick={onUndo} disabled={!canUndo}>
      Undo
    </Button>
    <Button onClick={onRedo} disabled={!canRedo}>
      Redo
    </Button>
  </div>
)


const mapStateToProps = (state) => ({
  canUndo: state.todos.past && state.todos.past.length > 0,
  canRedo: state.todos.future && state.todos.future.length > 0
})


const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo
