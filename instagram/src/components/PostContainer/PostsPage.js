import React from 'react';
import PostContainer from './PostContainer';

const PostsPage = props => {
    return (
        <div className="posts">
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
        </div>
    );
}

export default PostsPage;