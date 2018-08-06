import React from 'react';
import styled from "styled-components"

const StyledCommentContent = styled.div`
    padding-left: 15px;
    font-size: 14px;
    `;

    const StyledCommentUser = styled.span`
    font-weight: bold;
    margin-right: 5px;
    line-height: 19px;
    `;
    
    
const Comment = props => {
    return ( 
        <div>
            <StyledCommentContent>
                <StyledCommentUser>{props.com.username}</StyledCommentUser>{props.com.text}
            </StyledCommentContent>
        </div>
     );
}
 
export default Comment;