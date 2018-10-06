import React from 'react';
import Posts from './Posts';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
            {props.dummyData.map(data => (
                <div key={Math.random().toString() * 2}>
                    <Posts
                        key={data.username}
                        username={data.username}
                        thumbnail={data.thumbnailUrl}
                    />
                    <CommentSection
                        key={data.likes.toString()}
                        user={data.username}
                        comments={data.comments}
                        likes={data.likes}
                        image={data.imageUrl}
                    />
                </div>
            ))}
        </div>
    );
};

export default PostContainer;