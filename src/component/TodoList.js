import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import TodoItem from './TodoItem';
import { addTodo, clearTodo, deleteTodo } from '../actions/todoActions'
import { Link } from 'react-router-dom'

class TodoList extends React.Component {
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    //Gets the value from the input's value
    let value = event.target.todo.value;
    this.props.addTodo(value);
    
    //Cleaning the input field
    event.target.todo.value = '';
  }
  
  handleClick = () => {
    this.props.clearTodo();
  }
  
  handleDeleteTodo = (todoName) => {
    this.props.deleteTodo(todoName);
  }
  
  render() {
    console.log(this.props.todos);
      return(
        <div className="app"> 
          <h1>Todo List</h1>
          
            <Link to="/test">Test Component Page</Link>
          
          <form onSubmit={this.handleSubmit}>
            <input className="taskInput" name="todo" type="text" />
          </form>
            
          <button onClick={this.handleClick}>Clear TODO</button>
        
          <ul>
            {this.props.todos.map((todo, index) => {
              return <TodoItem key={index} name={todo.name} deleteTodo={this.handleDeleteTodo}/>
            })}
          </ul>
            
        </div>
          
      );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos
});

//Actions available inside the props
const mapDispatchToProps = (dispatch) => bindActionCreators({ addTodo, clearTodo, deleteTodo }, dispatch);

//combining two functions
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);