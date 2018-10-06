import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
        return (
            <div>
            Name
            Photo
            {props.data.map(item => {
                return (
                    <CommentSection
                    key={item.timestamp}
                    obj={item}
                    />
                )
            })}
            </div>
        )
}

export default PostContainer;