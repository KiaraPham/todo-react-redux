import React, {Component} from 'react';
import Footer from "./components/Footer";
import AddTodo from "./containers/Addtodo";
import VisibleTodoList from "./containers/VisibleTodoList";

class App extends Component {
  render() {
    return (
      <div className="card container">
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
