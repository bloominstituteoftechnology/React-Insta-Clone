import React from 'react'
import styled from 'styled-components';
const CommentAreaUser = styled.p`
padding-left:10px;
.commentUser{
    font-weight:bold;
}
`
class Comment extends React.Component {

    render() {
        return (
            <CommentAreaUser>
             <span>{this.props.commentUsername}</span> {this.props.commentText}  
            </CommentAreaUser>
        );
    }
}
Comment.defaultProps = {
    commentUsername: 'no username supplied',
    commentText: 'no text supplied',
}
export default Comment