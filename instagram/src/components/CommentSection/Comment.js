import React from 'react';
const Comment=prop=>
    <p><span><strong>{prop.data.username}</strong></span><span>{prop.data.text}</span></p>

export default Comment;