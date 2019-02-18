import React from 'react';

const InstaLikes = props => {
    return [
        <div className ="insta-likes" key="insta-icons" onClick={props.incrementLikes}>

            <div className = "insta-likes-wrapper">
              <i className="fa fa-heart" />
             </div>
           <div className = "insta-likes-wrapper">
              <i className="fa fa-comment" />
                </div>

            <div className="insta-likes" key="insta-likes-container">
              <div className="insta-likes-wrapper">{props.likes}</div>
             </div>
        </div>


    ];
};


export default InstaLikes;