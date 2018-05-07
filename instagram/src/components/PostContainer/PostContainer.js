import React from 'react';
import './postContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
    console.log("Props: ", props);
    return (
        <div>
            <h1>Hi From PostContainer</h1>
            {props.psusers.map(pcitem => {
                return (
                    <div key={pcitem.timestamp}>
                        <img src={pcitem.thumbnailUrl} className='thumbnailImg' />
                        {pcitem.username}
                        <CommentSection csitem={pcitem} />
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer;