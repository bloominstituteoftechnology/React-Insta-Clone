import React from 'react';
import Proptypes from 'prop-types';
import Comment from './Comment';

const CommentSection = (props) => {
    return ( 
        <div>
        {props.com.comment.map(item=> <Comment com={item}/>)}
        </div>
     );
}
 
export default CommentSection;