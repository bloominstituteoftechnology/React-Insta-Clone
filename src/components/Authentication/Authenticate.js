import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LoginPage from '../Login/Login';

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
            return(
                this.state.loggedIn ?   <PassedComponent /> :
                <LoginPage login={this.login} inputChangeHandler={this.inputChangeHandler}/>
            )
        }
    }
}
 export default Authenticate