import React from 'react';
import CommentIcons from './CommentIcons';
import CommentLikes from './CommentLikes';
import Comment from './Comment';
import Timestamp from './Timestamp';
import CommentInput from './CommentInput';

function CommentContainer(props) {
    return(
        <div>
            <CommentIcons />
            
            {props.posts.map((post, index) => {
                return(
                    <div key={index}>
                        <CommentLikes 
                            likes = {post.likes}
                        />

                        <Comment 
                            comments = {post.comments}
                        />

                        <Timestamp 
                            timestamp = {post.timestamp}
                        />
                    </div>
                )
            })}

            <CommentInput />
        </div>
    );
}

export default CommentContainer;