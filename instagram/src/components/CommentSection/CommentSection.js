import React,{Fragment} from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types';

const CommentSection = props =>{
    return (
        <Fragment>
        {props.comments.map((comment,i) =>
        <Comment key = {i} comment = {comment}/>)
        }
        <input type="text" placeholder="Add a comment..."/>
        </Fragment>
    );
}
CommentSection.propTypes ={
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;