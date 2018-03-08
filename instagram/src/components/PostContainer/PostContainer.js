import React from 'react';

const PostContainer = props => {
    const { users } = props;

    return (
        <div>
            {users.map(user => {
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
                        <CommentSection />
                    </div>
                );
            })}
        </div>
    )
}


export default PostContainer