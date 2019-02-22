import React from 'react';
import PostContainer from './PostContainer';
import {StyledPostsDiv} from './StyledPosts';

const PostsPage = props => {
    return (
        <StyledPostsDiv>
            {
                props.data.map((data, ind) =>
                <PostContainer
                    key={data.timestamp + ind}
                    id={data.timestamp + ind}
                    user={data.username} 
                    thumbnail={data.thumbnailUrl} 
                    img={data.imageUrl} 
                    likes={data.likes} 
                    comments={data.comments}
                    time={data.timestamp}
                />)
            }
        </StyledPostsDiv>
    );
}

export default PostsPage;