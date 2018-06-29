import React from 'react';
import styled from 'styled-components';
import {UsernameStyles} from '../PostContainer/PostHeader';

const SingleCommentContainerStyles = styled.div`
    display:flex;
    flex-wrap:wrap;
    max-width:613px;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:8px;
    padding-left:12px;
    padding-right:12px;
`
const CommentTextStyles = styled.div`
    font-size:15px;
    margin-left:5px;
`

const Comment = props => {
    return (
        <div>
            <SingleCommentContainerStyles>
                <div>
                    <UsernameStyles>
                        <div>
                            {props.commentUsername}
                        </div>
                    </UsernameStyles>
                </div>
                <CommentTextStyles>
                    <div>
                        {props.commentText}
                    </div>  
                </CommentTextStyles>
            </SingleCommentContainerStyles>      
        </div>

    );
}
export default Comment;