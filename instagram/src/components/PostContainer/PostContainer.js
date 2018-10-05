import React from 'react';

const PostContainer = props => {
    return (
        <div>
            {props.dummyData.map(item => {
                return (
                    <h2>{item.username}</h2>
                );
            })}
        </div>
    );
}

export default PostContainer;