import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import "../../App.css";
import PropTypes from 'prop-types';
import dummyData from '../../dummy-data';
import App from "../../App"

/* const PostContainer = props => {  */
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: this.dummyData,
      comments: null,
      likesCount: 1,
      username: "",
      password: "",
      display: "",
      counter: this.props.likes,
      asyncMessage: ''

    };

  }
  username = event => {
    console.log(event.target.value);
    event.preventDefault();
    this.setState( { username: event.target.value });
    console.log(this.state);
  }

password = event => {
  event.preventDefault();
    this.setState({ password: event.target.value });
  console.log(this.state.password);

}

submit = event => {
  console.log(event.target.value);
  console.log(this.state)
}


menu = event => {
  event.preventDefault();
  console.log("menu")
  const login = "flex"
 
  console.log("this.login:" + this.login)
  this.setState({display:  event.target.value} );
 
  console.log(this.state);
}
 
 

  render() {
        
    return (

      <div className="login">
        <div className="logon" style={this.styles}>
          <p className="loginText">Login</p>
          <div>Username: </div>
          <form className="loginForm" onSubmit={this.submit}>
            <input

            className="username" 
            type="text" 
            value={this.props.value}
            onChange={this.username}
            />
          <div>Password: </div> 
          <input
           className="password" 
           type="text" 
           value={this.props.value}
           onChange={this.password}
           />
           <input 
           type='button' 
           text='Submit'
           className="submitBtn" 
           value="Submit"
           onClick={this.submit}
           />
           
           </form>
          
          </div>
         

      </div>

    )
  }
}



export default Login;