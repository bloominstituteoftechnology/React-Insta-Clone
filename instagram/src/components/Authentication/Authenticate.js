import React from 'react';

const Authenticate = PostComponent => LoginComponent => {
    return class WrappedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedin: true,  //set to true for now so i dont have to sign in every time i make a change 
                loginValue: '',
                passwordValue: ''
            }
        }

        //set loginValue in state as user types in Username input field
        loginValueHandler = (event) => {
            this.setState({
              loginValue: event.target.value
            })
          }
        
          //same as above, just for the password input field
          passwordValueHandler = (event) => {
            this.setState({
              passwordValue: event.target.value
            })
          };

          // submit button function, checks if username/password in state matches whats on local storage
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