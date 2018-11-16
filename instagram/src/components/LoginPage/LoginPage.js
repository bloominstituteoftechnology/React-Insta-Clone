import React from 'react'
import logo from './../images/Instagram_logo.jpg';
import './LoginPage.css'

class LoginPage extends React.Component  {
    constructor() {
      super()
      this.state = {
        username: '',
        password: ''
      }
    }

    handleLoginChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      addLoginInfo = event => {
          const username= this.state.username;
          localStorage.setItem('user', username);
          window.location.reload()
      }
  
    render () {
    return (
      <div className='login'>
        
         <div className='form-field'>
            
            <div className='heading'>
                <img src={logo} alt='insta logo' className='insta-logo'/>
            </div>
            
            <form>
                <input 
                    className='input-username'
                    type='text'
                    name='username'
                    placeholder='Phone Number, Username, Email'
                    onChange={this.handleLoginChange}
                >    
                </input>
            
                <input
                    className='password'
                    type='text'
                    name='password'
                    placeholder='Password'
                    onChange={this.handleLoginChange}
                >
                </input>

                <button className='login-btn' onClick={this.addLoginInfo}>Log in</button>
            </form>
            <div className='footer'>
                <h5 className='or'>OR</h5>
                <div className='facebook-login'>
                    <i className="fab fa-facebook-square"></i>
                    <p>Log in with Facebook</p>
                </div>

                <a href='#'>Forgot password?</a>
        </div>
        </div>

        <div className='get-account'>
        Don't have an account? <a href='#' className='signup'>Sing up</a>
        </div>
       
      </div>
    )
    }
  }
  
  export default LoginPage