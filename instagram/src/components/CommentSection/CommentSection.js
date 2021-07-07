import React from 'react';

import InputComment from './InputComment';
    
    const CommentSection = props => {
      return (
        <div>
         {console.log(props)}
          <div>likes</div>
          {/* <InputComment comments={props.comments} /> */}
          <div>
            {props.comments.map((p, i) => {
              return (
                <div key={i}>
                  <b>{p.username}</b> {p.text}
                  
                </div>
            //  <div> <InputComment comments={p.comments} /> </div>
              );
              
            })}
          </div>
          <div>
          <form
            onSubmit={event => props.submitNewComment(event, props.timestamp)}
            className="commentBar"
          >
            <input
              onChange={props.updateCommentField}
              type="text"
              placeholder="Add comment... "
              name="commentField"
              value={props.commentField}
            />
          </form>
        </div>
        <div className="social-wrapper">
          <div className="social">
            <i className="fa fa-heart" />
          </div>
          <div className="social">
              <i className="fa fa-comments" />
            </div>
        </div>
          
        </div>
      );
     };

export default CommentSection;