import React from 'react';
import PostContainer from './PostContainer';

Posts = props => {
    return(

        <React.Fragment>
            {props.InstaPosts.map((post) => (
                <PostContainer placeholder={post} key={post.index} />
            ))}

        </React.Fragment>


    );
}



export default Posts;