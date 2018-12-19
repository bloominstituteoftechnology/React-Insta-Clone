import React from 'react';

const LikeSection = (props) => {
    return ( 
        <div>
            <i className="far fa-heart"  onClick={props.incrementLike}/>
            <div className= 'likes'>{props.likes}</div>
        </div>
     );
}
 
export default LikeSection;