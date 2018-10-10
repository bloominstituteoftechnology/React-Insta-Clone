import React, {Component} from 'react';
import LoginPage from '../Login/Login.js';

const Authenticate = (PassedComponent)  =>  {
    return class WrappedAuthenticate extends Component{
        constructor(props)  {
            super(props);
            this.state  =   {
                loggedIn: true,
                usernameInput: "",
            }
        }
        componentDidMount() {
            if(localStorage.getItem("username"))    {
                this.setState((state)   =>  ({
                    loggedIn: true,
                }))
            }   else {
                this.setState((state)   =>  ({
                    loggedIn: false,
                }))
            }
        }

        login   =   (e) => {
            e.preventDefault();
            localStorage.setItem("username", this.state.usernameInput);
            window.location.reload(true);
        }

        inputChangeHandler = ({target}) =>  {
            this.setState((state)   =>  ({
                usernameInput: target.value,
            }))
        }

        render()    {
            if(this.state.loggedIn) {
                return(
                    <div>
                        <PassedComponent />
                    </div>
                )
            }   else {
                return(
                    <div>
                        <LoginPage login={this.login} inputChangeHandler={this.inputChangeHandler}/>
                    </div>
                )
            }
        }
    }
}

export default Authenticate
