import React from 'react'
import Comment from './Comment'

import * as moment from "moment";
let now = moment().fromNow();


const CommentSection = props => {

    return <div className="comment-section">
        <div className="section likes">
          {props.likes} # likes {now}
        </div>
        {props.comments.map((comment, index) => {
          return <Comment user={comment.username} comments={comment.text} key={index} />;
        })}
      </div>;
}


export default CommentSection