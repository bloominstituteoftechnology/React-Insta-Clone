import React from "react";
import moment from "moment";
import heart from "../CommentSection/love.png";
import comBubble from "../CommentSection/comment.png";

class CommentSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

        <div>
          <img className="image" alt="" src={heart} />
          <img className="image" alt="" src={comBubble} />
        </div>

        <p className="likes">
          <b>{this.props.data.likes} likes</b>
        </p>

        <div>
        <p className="timestamp">
          <b>
            {moment(this.props.data.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
          </b>
        </p>
        <div>
            {
            this.props.data2.map(a => 
            <div>
              <span className='CommentSection__username'>{a.username}:</span>  
              <span className='CommentSection__comment'>{a.text}</span>
            </div>
            )}
        </div>

        <input
            className="commentInputField"
            type="text"
            placeholder="Add a comment..."
            name="inputField"
        />
      </div>
      </div>
  
    );
  }
}

export default CommentSection;
