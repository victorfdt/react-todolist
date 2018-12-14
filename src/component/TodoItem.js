import React from 'react';

const TodoItem = (props) => {
  return(
    <React.Fragment>
      <li>{props.name}</li>
      <button onClick={() => props.deleteTodo(props.name)}>x</button>
    </React.Fragment>
  );
}

export default TodoItem;