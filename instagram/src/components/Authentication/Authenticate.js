import React from 'react';
import PostsPage from '../PostContainer/PostsPage';
import Login from '../Login/Login'

const Authenticate = PostComponent => LoginComponent => {
    return class WrappedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedin: false,
                loginValue: '',
                passwordValue: ''
            }
        }

        loginValueHandler = (event) => {
            this.setState({
              loginValue: event.target.value
            })
          }
        
          passwordValueHandler = (event) => {
            this.setState({
              passwordValue: event.target.value
            })
          };

          submitHandler = () => {
              const username = localStorage.getItem('username');
              const password = localStorage.getItem('password');
              if (username === this.state.loginValue && password === this.state.passwordValue){
                  this.setState({
                      loggedin: true
                  })
              } else {
                  alert('Incorrect Username or Password')
              }
          }

        render () {
            return (
                <div>
                    {this.state.loggedin ? (<PostComponent /> 
                    ) : (
                        <LoginComponent login={this.loginValueHandler} password={this.passwordValueHandler} submit={this.submitHandler} />
                    ) 
                }
                </div>
            )
        }
    }
} 
    

export default Authenticate;