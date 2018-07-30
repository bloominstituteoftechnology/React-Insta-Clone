import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';

const CommentSection = (props) => {
    return ( 
        <div>        
        {console.log(props.data.comments)}
        {props.data.comments.map(item => <Comment username={item.username} text={item.text}/>)}
        {/* {props.data.map(comment => )} */}
        </div>
    );
}
 
export default CommentSection;