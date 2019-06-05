import React from 'react';

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
              <form className="login-form">
                <h3>Welcome to React Insta Clone</h3>
                <div>Please Login</div>
                <div className='login-form'>
                  <input
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className='login-form'>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                  <br />
                  <button color="success" size="large" onClick={this.handleLoginSubmit}>
                    Log In
                  </button>
                </div>
              </form>
            );
          }
        }


export default Login;