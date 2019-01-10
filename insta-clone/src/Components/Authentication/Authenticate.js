import React from 'react';
import Login from '../Login/Login';

const Authenticate = App => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedInUsers: [],
                loggedIn: false
            }
        }

        getLoggedInUsers = (e) => {
            const loggedInUsersArray = localStorage.getItem("loggedInUsersArray");
            this.setState({
                    loggedInUsers: loggedInUsersArray,
            })
        }
        
        checkLogIn = () => {
            const loggedInUsersArray = this.state.loggedInUsers;
            if (loggedInUsersArray.length > 0) {
                this.setState({
                    loggedIn: true
                })
                console.log('is user loggedin?', this.state.loggedIn);
            } else {
                alert('no one is logged in');
            }
        }

        componentDidMount(){
            this.getLoggedInUsers();
            console.log('logged in users state', this.state.loggedInUsers);
        }


        render() {
            const logInCheck = this.state.loggedIn;
            return (
                <div>
                <Login />
                <div>{logInCheck}</div>
                    <button onClick={() => { this.getLoggedInUsers(); this.checkLogIn()}}>Get loggedin users</button>
                <App />
                </div>
            )
        }
    }
}

export default Authenticate;

// {
//     if (logInCheck === true) {
//         return <App />
//     } else {
//         return (
//             <div>
//                 <h2>please authenticate</h2>
//                 <Login />
//             </div>
//         )
//     }
// }