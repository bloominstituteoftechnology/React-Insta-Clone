import React from 'react';

const CommentSection = props => {
    return(
        <div>
          {props.boo.map( (x,i) => <div key = {i}>
              <p> {x.username}</p>
              <p>{x.text}</p>
          </div>)}
          <input 
                    placeholder= "comments"
            />
          {/* why boooooooo? */}
        </div>
    );
}


export default CommentSection;