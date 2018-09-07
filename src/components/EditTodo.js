import React from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'


class EditTodo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false
    }
  }

  handleClose = () => {
    this.setState({show: false});
  }

  handleShow = () => {
    this.setState({show: true});
  }

  handleTextChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  static getDerivedStateFromProps(prevState, nextProps){
    if (prevState.prevText !== nextProps.text) {
      return {
        text : nextProps.text,
        prevText: nextProps.text,
      };
    }
    return null
  }

  render() {

    return (
      <span>
        <Button bsStyle="info" onClick={this.handleShow}>
          <FontAwesomeIcon icon={faEdit}/>
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input value={this.state.text} onChange={this.handleTextChange} />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>this.props.editTodo(this.state.text, this.state.id)}>Save</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

export default EditTodo