import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
const Comment=prop=><p className='user-comment'>
<span>{prop.data.username}</span> <span>{prop.data.text}</span> {prop.data.username===prop.username?
<i onClick={()=>prop.commentDelete(prop.itemNumber)} className="fas fa-times"></i>:null}
</p>

Comment.propTypes={
    data: PropTypes.objectOf(PropTypes.string).isRequired
}


export default Comment;