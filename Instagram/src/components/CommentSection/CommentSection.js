import React, { Component } from 'react';



const Comments = props => {
    return (
        <div classname="comments">
            {props.dummyData.map(data => <Data username={dummyData.username} text={dummyData.text} />)}
        </div>
    );
}

export default Comments;