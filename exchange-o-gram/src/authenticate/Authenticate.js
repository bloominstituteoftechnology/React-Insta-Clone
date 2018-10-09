import React from 'react';
import Login from '../components/Login/Login.js';
import PostsPage from '../components/PostContainer/PostsPage.js';

const authenticate = SignIn => Posts =>{
    return (
        class extends React.Component{
            constructor(props){
                super(props);
                this.state = {
                    loggedIn: false
                }
            }

            componentDidMount(){
                const user = localStorage.getItem('loggedInUser')
                if(user){
                    this.props.setUser(user);
                    this.setState({
                        loggedIn: true
                    })
                }
            }

            setLoggedIn = (username)=>{
                localStorage.setItem('loggedInUser', username);
                this.props.setUser(username);
                this.setState({
                    loggedIn: true
                })
            }

            render(){
                return (
                    this.state.loggedIn ? 
                    <Posts {...this.props}/> : 
                    <SignIn loginUser={this.setLoggedIn}/>      
                )
            }
        }
    )
}

const Authenticate = authenticate(Login)(PostsPage);

export default Authenticate;