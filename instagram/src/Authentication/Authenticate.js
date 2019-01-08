import React from 'react';
import PostsPage from '../components/PostContainer/PostsPage';

const Authenticate = Component => {
  return class extends React.Component {
    render() {
      return <Component page={<PostsPage/>}>

             </Component>;
    }
  };
}

export default Authenticate;
