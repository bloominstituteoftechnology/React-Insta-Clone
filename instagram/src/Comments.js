import React from 'react';
import './Comments.css';

// TODO Do length verification in Javascript once I can figure out how to get states working.

const moment = require('moment');
const hiddenStyle = {
  display: 'none',
}

const Comments = (data) => {
  if (data.comments.length < 5) { // If we don't need to truncate, continue as usual.
    return dontTruncate(data);
  } else { // If there are comments that need truncating.
    return doTruncate(data);
  }
}

const loadMore = (data) => {
  // I kinda got to the point of 'fuck it, it works' here.
  Array.from(document.getElementsByClassName(`hidden_${data.name}`)).forEach((element) => { // there may be more than one hidden comment.
    element.style.display = "block";
    console.log(element);
  });
  document.getElementsByClassName(`truncate_${data.name}`)[0].style.display = "none"; // But there will only ever be one truncation message.
}

const doTruncate = (data) => {
  let classes = `hidden_${data.name} comment`;
  let truncate = `truncate_${data.name} truncation`;
  return (
    <div className="comments">
      <div className="truncationBox"> {/*Then first print out the description.*/}
        <div className="comment">
          <h1>{data.comments[0].username}: </h1>
          <p>{data.comments[0].text}</p>
        </div>
        {/* Then display the expansion option */}
        <p onClick={() => loadMore(data)} className={truncate}>
          Load {data.comments.length - 4} more {data.comments.length - 4 > 1 ? 'comments.' : 'comment.'}. {/* Ternary to handle how the truncation expression should look */}
        </p>
      </div>

      {
        data.comments.slice(1, data.comments.length - 3).map((comment, i) => { // Generate hidden comments
          return (
            <div key={i} style={hiddenStyle} className={classes}>
              <h1>{comment.username}: </h1>
              <p>{comment.text}</p>
            </div>
          )
        })
      }

      {
        data.comments.slice(Math.max(data.comments.length - 3, 1)).map((comment, i) => { // Generate most recent 3 comments visibly.
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
          moment(data.time, "MMMM Do YYYY, hh:mm:ss a").fromNow() // moment is cool.
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
          moment(data.time, "MMMM Do YYYY, hh:mm:ss a").fromNow() // moment is cool.
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
