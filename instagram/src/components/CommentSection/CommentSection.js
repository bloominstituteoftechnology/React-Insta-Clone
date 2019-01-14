import React, { Component } from 'react';

const CommentSection = props =>{
    console.log(props.comments);
    return (
      <div >
          <div>
              <button>Heart</button>
              <button>Comment</button>
          </div>
          <p>{373} likes</p>
          {props.comments.map((comment)=>{
              return <p>{comment.username} {comment.text}</p>
          })}
          <p className="time-stamp">2 HOURS AGO</p>
          <input placeholder="Add a comment..."/>
        

      </div>
    )
}

export default CommentSection;
