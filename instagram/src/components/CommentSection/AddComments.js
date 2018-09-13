import React from 'react';
import CommentText from './CommentText';

function AddComments(props) {
    return <div>{props.inputComments.map((each) => <CommentText added={each} />)} </div> 
} //iterating over each property value of inputComments, passing the data to CommentText, where we named the data 'added'
export default AddComments;