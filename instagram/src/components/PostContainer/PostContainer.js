import React from 'react';

const PostContainer = props => {
    return (
        <div>
            {props.postData.map(post => {
                return (
                    <div>
                        {post.username}
                    </div>
                    )
                }
            )
        }
        </div>
    );
}

export default PostContainer;