import React from 'react';
import PostContainer from './PostContainer';

const PostsPage = props => {
    return(
        <div className='posts'>
            {
                props.data.map((data,index) =>
                <PostContainer
                    key={data.timestamp + index}
                    id={data.timestamp + index}
                    user={data.username}
                    thumbnail={data.thumbnailURL}
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