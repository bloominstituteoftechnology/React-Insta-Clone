import React from 'react';
import Login from '../components/Login/Login.js';
import PostsPage from '../components/PostContainer/PostsPage.js';
import PropTypes from 'prop-types'

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
                    <SignIn {...this.props} loginUser={this.setLoggedIn}/>      
                )
            }
        }
    )
}

const Authenticate = authenticate(Login)(PostsPage);

Authenticate.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })),
    displayInfo: PropTypes.bool,
    addLike: PropTypes.func.isRequired,
    addNewComment: PropTypes.func.isRequired,
    searchPosts: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired
}

export default Authenticate;