import React from 'react';

const Comment = (props) => {
  return ( 
    <div>
      {props.data.map( item => 
          <div className="username-n-comment" key={item.username}>
            <p className="username">{item.username}</p>
            <p className="user-comment">{item.text}</p>
          </div>
        )}
    </div>
   );
}
 
export default Comment;