import React from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { logout } from '../actions/loginActions'

const RootComponent = (props) => {
  
  const {firstName, lastName} = props;
  let loginOrLogout = "";
  
  if(firstName === "" || lastName === ""){
    loginOrLogout = <Link to="/Login">Login</Link>;
  } else {
    loginOrLogout = <button onClick={props.logout}>Logout</button>
  }
  
  return(
    <div>
        <Link to="/TodoList" >TodoList</Link> <br/>
        <Link to="/TestComponent" >TestComponent</Link> <br/>
        <Link to="/Job">Job</Link> <br/>
        {loginOrLogout}
    </div>
    
  );
}

const mapStateToProps = (state) => ({
  firstName: state.auth.firstName,
  lastName: state.auth.lastName
});

//Actions available inside the props
const mapDispatchToProps = (dispatch) => bindActionCreators({ logout }, dispatch);

//combining two functions
export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);