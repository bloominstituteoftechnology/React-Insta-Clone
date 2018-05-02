import React from 'react';
import dummyData from '../../dummy-data';

// const PostContainer = props => {
//     return (
//         {props.users.map(task => {
//     )

const PostContainer = props => {
    return(
        <div>
            {let comments = props.map(item => item.comments)}
            <CommentSection boo = {}/>
        </div>
    );
}