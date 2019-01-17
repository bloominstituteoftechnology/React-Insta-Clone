import React from 'react';
import styled from 'styled-components';
/*
Passed as props from CommentSection.js

key={i} 
user={c.username} 
text={c.text}

*/
// Styles using styled-components 

const CommentText = styled.p`
    margin: 8px 0;
`

const Comment = props => {
    return (
        <div>
            <CommentText> 
                <strong>{props.user}</strong> {props.text}
                </CommentText>
        </div>
    )
}

export default Comment