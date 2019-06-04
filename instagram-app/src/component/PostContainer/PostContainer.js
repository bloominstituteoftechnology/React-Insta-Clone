import React from 'react';

const PostContainer = (props) => {
    return (
        <div>
            {props.username}
            {props.thumbnailUrl}
            {props.imageUrl}
            {props.likes}
            {props.timestamp}
            <comment />
        </div>
    );
};

export default PostContainer;