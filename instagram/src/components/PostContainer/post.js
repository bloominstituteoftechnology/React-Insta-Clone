import React from 'react';

import CommentSection from '../CommentSection/commentsection';


const Post = props =>{

    return(
        <div>
            {props.post.username}

            <CommentSection comments={props.post.comments}/>
        </div>
    )
}






export default Post;