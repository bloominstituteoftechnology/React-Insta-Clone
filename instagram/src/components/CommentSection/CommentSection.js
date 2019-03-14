import React from 'react';

import Comment from './Comment';

function CommentSection(props) {
    return (
      <div>
        <div>
            {console.log(props)};
            <Comment username={props.username} text={props.text}/>
        </div>
        <input></input>
      </div>  
    );
}

export default CommentSection;