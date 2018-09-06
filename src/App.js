import React, {Component} from 'react';
import Footer from "./components/Footer";
import AddTodo from "./containers/Addtodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import EditTodo from "./components/EditTodo";

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
        <EditTodo/>
      </div>
    );
  }
}

export default App;
