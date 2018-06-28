import React from 'react';

const Likes = props => {
  
    return(
    <div className="post-icons">
<i className="fa fa-heart" />
<i className="far fa-comment" />
<p className="post-likes">{props.likes} likes</p>
</div>
    );
}


export default Likes;