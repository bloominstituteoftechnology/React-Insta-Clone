import React from "react";
import "./CommentSection.css";
import dummyData from "../../dummy-data";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: "",
      user: "dummyuser"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ comments: dummyData.map(data => data.comments) });
    }, 500);
  }

  render() {
    return (
      <div>
        {this.props.comments.map(comment => {
          return (
            <div className="comment" key={Math.random()}>
              <strong>{comment.username}</strong> {comment.text}
            </div>
          );
        })}

        <div className="timestamp">{this.props.timestamp}</div>
        <div className="add-comment">
          <form>
            <input type="text" placeholder="Add a comment..." />
          </form>
          <i className="fas fa-ellipsis-h" />
        </div>
      </div>
    );
  }
}

// const CommentSection = props => {
//   return (
//     <div>
//       {props.comments.map(comment => {
//         return (
//           <div className="comment" key={Math.random()}>
//             <strong>{comment.username}</strong> {comment.text}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default CommentSection;
