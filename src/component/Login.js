import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../actions/loginActions'
import { Redirect } from 'react-router'

class Login extends React.Component {
   
  constructor(props){
      super(props);
      this.state = {
          firstName: '',
          lastName: '',
          password: ''
      }
  }
   
 handleSubmit = () => {
     this.props.login(this.state);
 }  
 
 handleInputChange = (event) => {
     switch(event.target.name) {
         case 'firstName':
             this.setState({
                 firstName: event.target.value
             });
             break;
        case 'lastName':
             this.setState({
                 lastName: event.target.value
             });
             break;
        case 'password':
             this.setState({
                 password: event.target.value
             });
             break;
        default:
            break;
     }
 }
 
  render() {
      const {firstName, lastName} = this.props;
      
      if(firstName !== "" || lastName !== ""){
          return <Redirect to="/" />
      } else {
          return (
            <React.Fragment>
                <span>First name: </span> <input name="firstName" value={this.state.firstName} type="text" onChange={(event) => this.handleInputChange(event)}/> <br/>
                <span>Last name: </span> <input name="lastName" value={this.state.lastName} type="text" onChange={(event) => this.handleInputChange(event)}/> <br/>
                <span>Password: </span> <input  name="password" value={this.state.password} type="password" onChange={(event) => this.handleInputChange(event)}/>
                <button onClick={this.handleSubmit}>Login</button>
            </React.Fragment>
        );
      }
    
  }
}

const mapStateToProps = (state) => ({
  firstName: state.auth.firstName,
  lastName: state.auth.lastName
});

//Actions available inside the props
const mapDispatchToProps = (dispatch) => bindActionCreators({ login }, dispatch);

//combining two functions
export default connect(mapStateToProps, mapDispatchToProps)(Login);