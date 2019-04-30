import React from 'react'; 

const Likes = props => {
    return (
        <div className="engagement">
            <div className="engagementIcons">
              <i className="far fa-heart" onClick={props.addLike}> </i>
              <i className="far fa-comment"></i>
            </div>

            <p className="likesNumber">{props.likes} likes </p>
          </div>
    )
}

export default Likes; 