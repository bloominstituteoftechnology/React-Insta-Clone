import React from 'react';
import heart from '../../images/Instagram-Heart.png';
import comment from'../../images/comment.png';

const LikeSection = props => {
    return [
        
        <div> 
            <div 
            className="like-section"
            key="likes-icons-container"
            onClick={props.incrementLike}
      >
            <img src ={heart} alt ='heart' />
            <img src={comment} alt ='comment' />
         
       </div>
       <div className="like-number-section" key="likes-container">
       <div className="like-section-wrapper">{props.likes} Likes </div>
     </div>
     </div>
    ]
}

export default LikeSection;