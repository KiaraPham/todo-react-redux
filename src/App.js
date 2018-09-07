import React, {Component} from 'react';
import Footer from "./components/Footer";
import AddTodo from "./containers/Addtodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import './App.css'
import UndoRedo from "./containers/UndoRedo";

class App extends Component {
  render() {
    return (
      <div className='container app-wrapper '>
        <div>
          <AddTodo/>
          <VisibleTodoList/>
          <Footer/>
          <UndoRedo/>
        </div>
      </div>
    );
  }
}

export default App;
