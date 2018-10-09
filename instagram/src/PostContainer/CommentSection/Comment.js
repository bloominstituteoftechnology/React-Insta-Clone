import React, {Component} from 'react';
const Comment= prop =>{
    return (
        <div>
            {prop.username}: {prop.text}
        </div>
    )
}
export default Comment;