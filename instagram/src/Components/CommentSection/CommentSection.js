import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    console.log("PROPS: ", props);
    return (
        
        props.data.map((obj) => {
            return (
                <div className = "commentwrapper" key={obj.timestamp}>
                    
                </div>
            );
        })
    );        
}
export default CommentSection;