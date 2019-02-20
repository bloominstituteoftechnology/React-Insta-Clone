import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return( 
    <div>    
        {props.dataProps.map(point => 
            <div key ={point.timestamp}> 
                <img src={point.imageUrl} alt={point.timestamp}/>
                <CommentSection 
                    comments={point.comments} />
            </div>
        )} 
    </div>)
}

PostContainer.propTypes = {
    dataProps: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            imgUrl: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            comments: PropTypes.array
        })
    )
}

export default PostContainer;