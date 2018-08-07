import React from '../../node_modules/react';
import PostContainer from './PostContainer';
import PropTypes from '../../node_modules/prop-types';


const Body = props => {
    return (
    <div>{props.posts.map(each => <PostContainer content={each} />)}</div>
    );
};

 Body.propTypes = {
   posts: PropTypes.shape({
     username: PropTypes.string,
     thumbNailURL: PropTypes.string,
     imageUrl: PropTypes.string,
     likes: PropTypes.number,
     timestamp: PropTypes.string

   })
 }




  export default Body;