import React from 'react';
import { Link } from 'react-router-dom'

const RootComponent = (props) => {
  return(
    <div>
        <Link to="/TodoList" >TodoList</Link> <br/>
        <Link to="/TestComponent" >TestComponent</Link> <br/>
        <Link to="/Job">Job</Link>
    </div>
    
  );
}

export default RootComponent;