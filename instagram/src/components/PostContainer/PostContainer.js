import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js'


const PostContainer = props => {
    const { posts } = props;

    return (
        <div>
            {posts.map(user => {
                return (
                    <div key={user.username}>
                        <div>
                            <img src={user.thumbnailUrl} alt={user.username + ' Thumbnail'} />
                            <div>{user.username}</div>
                        </div>
                        <div>
                            <img src={user.imageUrl} alt={user.username + ' image'} />
                        </div>
                        <div>
                            <div>{user.likes + ' likes'}</div>
                        </div>
                        <div>
                            <div> <CommentSection key={user.index} comments={user.comments} /></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PostContainer;
