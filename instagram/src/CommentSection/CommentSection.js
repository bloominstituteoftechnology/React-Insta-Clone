import React from "react";
import PropTypes from "prop-types";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  render(props) {
    return (
      <div className="post-comments">
        <strong>{props.username}</strong> <span>{props.text}</span>
      </div>
    );
  }
}

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

CommentSection.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default CommentSection;
