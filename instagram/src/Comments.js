import React from 'react';
import PropTypes from "prop-types";
import dummyData from './dummy-data';
import CommentInput from './CommentInput';

const Comments = props =>{


    return(
                <div className='comments-section'>
                    {props.comments.map( (comments,data) =>
                        <div key={data}>
                            <div className='user'>{comments.username}</div>
                            <div className='comment'>{comments.text}</div>
                        </div>
                        
                    )}
                    <CommentInput />
                </div>
            )
        }
    
 



 export default Comments;