import React from 'react';
import CommentText from './CommentText';

function AddComments(props) {
    return <ul>{props.inputComments.map((each) => <CommentText added={each} />)} </ul> 
} //iterating over each property value of inputComments, passing the data to CommentText, where we named the data 'added'
export default AddComments;