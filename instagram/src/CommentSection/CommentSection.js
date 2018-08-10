import React from "react";
import PropTypes from "prop-types";
import Comments from "Comments";
import CommentInput from "CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  componentDidMount() {
    const id = this.props.postID;
    if (localStorage.getItem(id)){
      this.setState({
        comments: localStorage.getItem(this.props.postID)
      })
    }
  }

  componentWillMount() {}

  newComments = () => {};

  commentHandler = event => {};

  handleCommentSubmit = event => {};

  render(props) {
    return (
      <React.Fragment>
        {this.state.comments.map((each, i) => (
          <Comments key={i} comment={each} />
        ))}

        <CommentInput
          comment={this.state.comment}
          newComments={this.handleCommentSubmit}
          changingComment={this.commentHandler}
        />
      </React.Fragment>
    );
  }
}



CommentSection.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default CommentSection;



// const CommentSection = props => {
//   return (
//     <React.Fragment>
//       {props.comments.map((each, i) => {
//         return (
//           <div key={i} className="post-comments">
//             <strong>{each.username}</strong> <span>{each.text}</span>
//           </div>
//         );
//       })}
//     </React.Fragment>
//   );
// };