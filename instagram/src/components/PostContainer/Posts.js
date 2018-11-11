import React from 'react';
import PostContainer from './PostContainer';

Posts = props => {
    return(

        <React.Fragment>
            InstaPosts.map(post) => { 
            return PostContainer key= {post.index} placeholder={post}
            }

        </React.Fragment>


    );
}



export default Posts;