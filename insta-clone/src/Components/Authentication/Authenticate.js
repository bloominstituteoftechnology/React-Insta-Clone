import React from 'react';
import Login from '../Login/Login';

const Authenticate = App => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            }
        }

        getLoggedInUsers = () => {
            const loggedInUsersArray = localStorage.getItem("loggedInUsersArray");
            if (loggedInUsersArray) {
                this.setState({
                    loggedIn: true
                })
            } 
        }

        componentDidMount(){
            this.getLoggedInUsers();
        }

        render() {
            if (this.state.loggedIn === true) return <App />
            return <Login />
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