import React from 'react';

const PostContainer = props => {
    console.log("Props from PostContainer: ", props);
    return (
        <div>
            {props.people.map(person => {
                return (
                    <div key={person.username}>
                        <h4>{person.username}</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default PostContainer;