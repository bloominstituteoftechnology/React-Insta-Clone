import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return( 
    <div>    
        
        {props.dataProps.map(point => 
        <div>
            <img src={point.imageUrl} />

            <CommentSection 
                comment={point.comment} 
                key={point.username} 
                username={point.username}
            />
        </div>
        )} 
    </div>)
}

export default PostContainer;