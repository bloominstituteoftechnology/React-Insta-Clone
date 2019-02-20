import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return( 
    <div>    
        {/* {props.comments.} */}
        {props.dataProps.map(point => 
        <div key ={point.timestamp}> 
            <img src={point.imageUrl} alt={point.timestamp}/>
            <CommentSection 
                comments={point.comments} />
        </div>
        )} 
    </div>)
}

export default PostContainer;