import React from 'react';
import './CommentSection.css';
import styled from 'styled-components';

const UserComment = styled.div`
`;

const UsernameText = styled.div`
    width: 100%;
    margin-bottom: 0px;
`;

const CommentList = styled.ul`
    list-style-type: none;
    text-align: left;
    padding-left: 10px;
`;

const Timestamp = styled.div`

`;



const Comment = props => {
    return(
        <UserComment>
            <UsernameText>
                <CommentList>
                    <li>
                        <span className="username">{props.comment.username}</span> <span className="comment-text">{props.comment.text}</span>
                    </li>
                </CommentList>
            </UsernameText>
            <Timestamp>
                {props.comment.timestamp}
            </Timestamp>
        </UserComment>
    )
}

export default Comment;