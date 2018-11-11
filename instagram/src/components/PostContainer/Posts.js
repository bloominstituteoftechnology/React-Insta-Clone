import React from 'react';
import PostContainer from './PostContainer';

const Posts = props => {
    return(

        <React.Fragment>
            {props.IGPosts.map((post, index) => (
                <PostContainer key={post.index} placeholderOnProp={post}/>
            ))}

        </React.Fragment>


    );
}



export default Posts;