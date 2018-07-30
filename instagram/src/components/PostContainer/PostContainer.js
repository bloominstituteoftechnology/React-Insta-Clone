import React from 'react';
import CommentContainer from '../CommentSection/CommentContainer';

const PostContainer = props => {
    console.log(props.user)
    return (
        <div>
            {props.user.map((user, index) => {
                return <div key={index}><img src={user.thumbnailUrl} alt='thumbnail' /> {user.username}

                    <div>
                        <img src={user.imageUrl} alt='img' />
                    </div>

                    <div>
                        {user.likes}
                    </div>

                    <div>
                        <CommentContainer comments={user.comments} />
                    </div>

                </div>
            })}
        </div>
    );
}

export default PostContainer;