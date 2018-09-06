import React from 'react';
import Post from './Post';
import styled, {css} from "styled-components";
 
const PostContainer = styled.div`
    width: 40%;
    margin: 5px auto;
`;

function PostsContainer(props) {
    return (
            <PostContainer>
                {props.posts.filter(post => {
                return post.username.includes(props.searchTerm);
                 }).map(p => <Post key={p.imageUrl} post={p} />)}
            </PostContainer>
    );
};

 export default PostsContainer;
