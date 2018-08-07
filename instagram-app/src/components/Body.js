import React from '../../node_modules/react';
import PostContainer from './PostContainer';

const Body = props => {
    return (
    <div>{props.posts.map(each => <PostContainer content={each} />)}</div>
    );
  };

  export default Body;