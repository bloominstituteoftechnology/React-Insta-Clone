import React from 'react';
import PropTypes from 'prop-types';
//css   


const Comment = props => {
    return ( 
         <div className = "comment" >
       
            <div className = "commentUsername" > 
              {props.comment.username} 
            </div> 
             <div className = "commmentComment" > 
               {props.comment.text}
             </div> 
         </div>

    );
};


Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string

    })

};

export default Comment;