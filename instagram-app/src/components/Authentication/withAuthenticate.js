import React from 'react'; 

import PostsPage from '../PostContainer/PostsPage'; 

import Login from '../Login/Login'; 

const withAuthenticate = PostsPage => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        username: ''
      };
    }

    // componentDidMount
    componentDidMount() {
      
      // if user is logged in, set loggedin to true 
      if (!localStorage.getItem('username')) {
        this.setState({
          loggedIn: false 
        })
      }else {
        this.setState({
          loggedIn: true, 
          username: localStorage.getItem('username')
        })
      }
    }

    render() {
      // If a user is logged in we return the Posts Page
      if (this.state.loggedIn) {
        return <PostsPage />;
      } else {
        // Otherwise we return the Login page
        return <Login />;
      }
    }
  }; 

  export default withAuthenticate; 