import React,{Fragment} from 'react';
import Comment from './Comment'
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
export default CommentSection;