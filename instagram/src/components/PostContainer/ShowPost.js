import React from 'react';
import { withRouter } from "react-router";
import Post from './Post';
import { ShowPostWrapper } from '../styles/PostContainerStyles';

class ShowPost extends React.Component {
  render() {
    const user = this.props.getUser(this.props.match.params.id);
    return ( 
      <ShowPostWrapper>
        <Post user={user} />
      </ShowPostWrapper>
     );  
  }
}

export default withRouter(ShowPost);