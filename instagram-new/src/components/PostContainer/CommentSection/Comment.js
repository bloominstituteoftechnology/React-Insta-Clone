import React from 'react';
import { CommentHolder, CommentContent, CommentText, Time } from './CommentStyle';
import { PostUserName } from '../../StylesReusable';

const CommentDisplay = props => { 
    return (
        <div>
        <CommentHolder>
            {props.comments.map(comments => {
                return (
                    
                    <CommentContent>
                        <PostUserName comment>{comments.username}</PostUserName>
                        <CommentText>{comments.text}</CommentText>
                    </CommentContent>
                    
                
                );
            })}
            
        </CommentHolder>
        <Time>2 HOURS AGO</Time>
        </div>
    );
}

export default CommentDisplay;