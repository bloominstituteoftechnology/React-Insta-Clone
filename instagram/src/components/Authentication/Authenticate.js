import React from 'react';
import Login from '../Login/Login.js';


const Authenticate = Component => {
    class HOC extends React.Component {
        constructor(){
          super();
          this.state = {loggedIn: false}
        }

        componentDidMount(){
            if(window.localStorage.getItem('username')){
                this.setState({loggedIn: true});
            }
        }

        render(){
            return (
                <div>
                {this.state.loggedIn === true ? (
                    <Component />
                ) : (
                    <Login/>
                )}
                </div>
            )
        }
    }
    return HOC;
}

export default Authenticate;