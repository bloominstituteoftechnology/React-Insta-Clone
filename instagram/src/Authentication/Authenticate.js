import React from 'react';
import Login from '../components/Login/Login';

const Authenticate = App =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state ={
                isLoggedIn: false
            }
        }

        componentDidMount = () => {
            if (window.localStorage.getItem('username')) {
                this.setState({
                    isLoggedIn: !this.state.isLoggedIn
                })
            }
        }

        render() {
            
           return (
                this.state.isLoggedIn ? <App /> : <Login />
           )
        }

           
        
    }

export default Authenticate;