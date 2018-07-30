import React from 'react';
import PropTypes from "prop-types";
import dummyData from './dummy-data';


const Comments = props =>{


    return(
                <div className='comments-section'>
                    {props.comments.map( (comments,data) =>
                        <div key={data}>
                            <h1>{comments.username}</h1>
                            <p>{comments.text}</p>
                        </div>
                    )}
                </div>
            )
        }
    
 



 export default Comments;