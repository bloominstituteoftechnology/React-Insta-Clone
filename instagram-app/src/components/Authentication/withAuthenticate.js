import React from 'react'; 

import PostsPage from '../PostContainer/PostsPage'; 
import Login from '../Login/Login'; 

const withAuthenticate = PostsPage => Login =>
  class extends React.Component {
    render() {
      // If a user is logged in we return the Posts Page 

      // Otherwise we return the Login page 
      
    }
  };

  export default withAuthenticate; 