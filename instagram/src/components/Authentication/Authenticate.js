import React from 'react';
import Login from '../Login/Login';
import App from '../../App';

// import PostsPage from '../PostContainer/PostsPage';

const Authenticate = App => 
    class extends React.Component{
        constructor(props){
            super(props);
            this.state={
                loggedIn: false
            };
        }

        componentDidMount(){
            if (localStorage.getItem('username') !== 'undefined' &&
                localStorage.getItem('password') !== 'undefined' &&
                localStorage.getItem('username') &&
                localStorage.getItem('password'))
            {   this.setState({loggedIn: true});
            } else{
                this.setState({loggedIn: false});
            }
        }
        
        render() {
            console.log(this.state.loggedIn);
            if(!this.state.loggedIn){
                return <Login />
            }
            return  <App />            
        }
    };

export default Authenticate;