import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";


class PostContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="postDiv">
          <div className="logoDiv">
            <img className="logo" alt="" src={this.props.thumbnailUrl} />
          </div>
          <div className="username">
            {
              <span>
                <b>{this.props.username}</b>
              </span>
            }
          </div>
        </div>
        <img className="mainImage" alt="" src={this.props.imageUrl} />
        
        
        <CommentSection data={this.props} data2 = {this.props.comments} />
      
      </div>
    );
  }
}

export default PostContainer;
