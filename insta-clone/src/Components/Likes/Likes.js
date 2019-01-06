import React from 'react';

const Likes = (props) => {
    const { likes } = props.likes;
    console.log(likes);
    return (
        <div>
            <p>likes test</p>
            <div> {likes ? (
                <div>likes go here</div>
                ) : (
                    <div>{console.log('likes with props', likes)}</div>
                )
            }</div>
        </div>
    )
}

export default Likes;