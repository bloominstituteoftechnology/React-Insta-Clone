import React from 'react';
import Proptypes from 'prop-types';


function Comments(props){
    console.log(props);
    return(
        
        <div className='comments'>
       
        <span className="user">{props.comment.username}</span>{''}
         <span className="comment">{props.comment.text}</span>
      
    
        </div>
    )
}


Comments.propTypes={
    comments:Proptypes.shape({
        text:Proptypes.string,
        username:Proptypes.string,
        
      
    })
}

export default Comments;
