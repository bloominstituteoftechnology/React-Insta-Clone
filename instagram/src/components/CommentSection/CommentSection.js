import React from 'react';


    
    const CommentSection = props => {
      return (
        <div>
          <div>likes</div>
          <div>
            {props.comments.map((p, i) => {
              return (
                <div key={i}>
                  <b>{p.username}</b> {p.text}
                </div>
              );
            })}
          </div>
          <div>input</div>
        </div>
      );
     };

export default CommentSection;