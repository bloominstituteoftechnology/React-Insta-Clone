import React from 'react';
import PostContainer from './PostContainer';
import styled from 'styled-components';

const PostListContainer = styled.div`
    
`;
const PostList = (props) => {
    
    return (
        <PostListContainer>
            {
                props.instaData.map((dataItem, i) => {
                return <PostContainer dataItem={dataItem} 
                    key={dataItem.id}
                    index={i}
                    changeCommentHandler={props.changeCommentHandler}
                    addCommentHandler={props.addCommentHandler}
                    addLikeHandler = {props.addLikeHandler} />
            })}
        </PostListContainer>
    );
}




export default PostList;