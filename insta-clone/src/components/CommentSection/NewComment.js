import React from 'react';

function NewComment(props) {
    return <p>
        {props.commentdata.username} {props.commentdata.text}
      </p>;
}

export default NewComment;