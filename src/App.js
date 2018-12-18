import React, { Component } from 'react';
import TodoList from './component/TodoList';
import RootComponent from './component/RootComponent';
import TestComponent from './component/TestComponent';
import Job from './component/Job';

import './App.css';
import { Route, Switch  } from 'react-router-dom';


class App extends Component {
 
  render() {
    return (
      <Switch>
        
        {/*Root route*/}
        <Route 
          exact 
          path="/"
          component={RootComponent}
        />
      
        <Route
          path="/TodoList"
          component={TodoList}
        />
        
        <Route
          path="/TestComponent"
          component={TestComponent}
        />
        
        <Route 
          path="/Job"
          component={Job}
        />
      </Switch>
      
    );
  }
}

export default App;
