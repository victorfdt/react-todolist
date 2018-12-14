import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import TodoItem from './TodoItem';
import { addTodo, clearTodo, deleteTodo } from '../actions/todoActions'

class TodoList extends React.Component {
  
  constructor(props){
      super(props);
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    let value = event.target.todo.value;
    this.props.addTodo(value);
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
          <div> 
            <ul>
              {this.props.todos.map((todo, index) => {
                return <TodoItem key={index} name={todo.name} deleteTodo={this.handleDeleteTodo}/>
              })}
            </ul>
            
            <form onSubmit={this.handleSubmit}>
              <input name="todo" type="text" />
            </form>
            
            <button onClick={this.handleClick}>Clear TODO</button>
            
          </div>
          
          );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ addTodo, clearTodo, deleteTodo }, dispatch);

//combining two functions
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);