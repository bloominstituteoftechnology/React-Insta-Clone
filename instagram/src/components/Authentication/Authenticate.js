import React from 'react';
import App from '../../App';
import Login from '../Login/Login';



const Authenticate = comp =>
    class extends React.Component{
        constructor(){
            super();
            this.state={
                loggedIn: false
                // username: '',
                // password: ''
            }
        }

        componentDidMount(){
            if (localStorage.getItem('username') && localStorage.getItem('password')){
                this.setState({loggedIn: true});
            } else{
                this.setState({loggedIn: false});
            }
        }
        

        render() {
            if(this.state.loggedIn === false){
                return <App/>
            } else{
                return <Login />;
                // return <PostsPage />;
            } 
        }
    };

export default Authenticate;