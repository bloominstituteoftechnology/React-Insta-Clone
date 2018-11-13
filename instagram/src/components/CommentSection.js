import React from 'react';

function CommentSection(props){
    return (
        <div>
            {console.log(props.com)}
            {props.com.text} <br/>
            {props.com.username}
        </div>
    );
}

export default CommentSection;