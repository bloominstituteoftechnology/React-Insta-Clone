import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

export const Comment = (props) => {
  return (
    <div className="App__Comments">
      {
        props.comments.map((comment) => {
          return (
            <div key={comment.username + comment.text} className="App__Comment">
              <strong>{comment.username}</strong> {comment.text}
            </div>
          )
        })
      }
      <form onSubmit="">
        <input type="text" onChange="" placehoder="Post Comment..."/>
      </form>
    </div>
  );
}