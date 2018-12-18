import React from 'react';

const TodoItem = (props) => {
  return(
    <React.Fragment>
      <li>
        {props.name}
        <button className="deleteButton" onClick={() => props.deleteTodo(props.name)}>x</button>
      </li>
      
    </React.Fragment>
  );
}

export default TodoItem;