import React from 'react';
import Post from '../PostContainer/Posts';
import styled from 'styled-components';

//import './Posts.css';

const PostsContainerWrapper = styled.div`
height: 500px;
width: 40%;
margin: 5px auto;
`;

const PostContainer = props => {
    return (
        <PostsContainerWrapper>
      {props.posts.map(p => <Post 
                                    key={p.imageUrl} 
                                    index={p.imageUrl}
                                    post={p} 
                                    addComment={props.addComment} 
                                    commentTemplate={props.commentTemplate}
                                    addCommentHandler={props.addCommentHandler}
                                    />)}
    </PostsContainerWrapper>
        );    
}

export default PostContainer;