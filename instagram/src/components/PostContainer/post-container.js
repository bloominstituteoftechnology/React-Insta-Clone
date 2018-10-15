import React from 'react';


const PostContainer = props => {
    return (
        <div>{props.dummyData.map((post, i) => {
            return (
                <p>
                    {props.dummyData.username}
                </p>
            )
        })}
        </div>
    )
}

export default PostContainer;