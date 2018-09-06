import React from 'react';


import './Login.css';
// const Login = props => {
//   return (
//     <div className='login-page'>
//       <form className='login-form'>
//         <input type='text' placeholder='Username' name='username'></input>
//         <input type='text' placeholder='Password' name='password'></input>
//         <input type='submit' value='Log In'></input>
//       </form>
//     </div>
//   );
// }

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <div className='login-container'>   
        <div className='login-box'>
          <div className='instagram-word'></div>
          <form>
            <p>Username:</p>
            <input 
              type='text' 
              onChange={this.handleInputChange} placeholder='Username' name='username' id='username-check'>
            </input>

            <p>Password:</p>            
            <input 
              type='text' 
              placeholder='Password' 
              name='password'
              onChange={this.handleInputChange} 
              id='password-check'>
            </input>

            <input type='submit' value='Log In' className='login-blue' onClick={this.handleLoginSubmit}></input>
          </form>
        </div>
      </div>
    );
  }
}


export default Login;
