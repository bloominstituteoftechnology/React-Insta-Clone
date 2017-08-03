import React from 'react';
import './Comments.css';

// TODO Do length verification in Javascript once I can figure out how to get states working.

const moment = require('moment');
const Comments = (data) => {
  if (data.comments.length < 5) { // If we don't need to truncate, continue as usual.
    return dontTruncate(data);
  } else { // If there are comments that need truncating.
    return doTruncate(data);
  }
}

const doTruncate = (data) => {
  return (
    <div className="comments">
      <div className="truncationBox"> {/*Then first print out the description.*/}
        <div className="comment">
          <h1>{data.comments[0].username}: </h1>
          <p>{data.comments[0].text}</p>
        </div>
        {/* Then display the expansion option */}
        <p className="truncation">
          Load {data.comments.length - 4} more {data.comments.length - 4 > 1 ? 'comments.' : 'comment.'}. {/* Ternary to handle how the truncation expression should look */}
        </p>
      </div>
      {/* Then print out the most recent 3 comments*/}

      {
        data.comments.slice(Math.max(data.comments.length - 3, 1)).map((comment, i) => {
          console.log(comment);
          return (
            <div key={i} className="comment">
              <h1>{comment.username}: </h1>
              <p>{comment.text}</p>
            </div>
          )
        })
      }

      <p className="time">
        { // use moment to first convert to ISO 8601 string, then return how long ago that was.
          moment(data.time, "MMMM Do YYYY, hh:mm:ss a").fromNow() // FUCK moment is cool.
        }
      </p>
      <div className="addComment">
        <form>
          <input
            type="text"
            maxLength="120"
            autoComplete="off"
            placeholder="Add a comment..."
          />
        </form>
        <div className="elipses">
          ...
        </div>
      </div>
    </div>
  )
}

const dontTruncate = (data) => {
  return (
    <div className="comments">
      {
        data.comments.map((comment, i) => {
          return (
            <div key={i} className="comment">
              <h1>{comment.username}: </h1>
              <p>{comment.text}</p>
            </div>
          )
        })
      }
      <p className="time">
        { // use moment to first convert to ISO 8601 string, then return how long ago that was.
          moment(data.time, "MMMM Do YYYY, hh:mm:ss a").fromNow() // FUCK moment is cool.
        }
      </p>
      <div className="addComment">
        <form>
          <input
            type="text"
            maxLength="120"
            autoComplete="off"
            placeholder="Add a comment..."
          />
        </form>
        <div className="elipses">
          ...
        </div>
      </div>
    </div>
  )
}

export default Comments;
