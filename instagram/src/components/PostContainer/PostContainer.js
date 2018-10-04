import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import './PostContainer.css'


const PostContainer = (props) => {
    console.log(props);
    return (

        //receives individual post of postData array from
        //PostContainerList
        //render a post to UI, pass comment to CommentSection
        // <CommentSection />
        <div className="post">
            <h4>PostContainer</h4>
            <CommentSection />
        </div>
    )
}

export default PostContainer;