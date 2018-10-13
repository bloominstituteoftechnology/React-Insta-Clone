import React from "react";
import PropTypes from "prop-types";

import Comment from "./Comment";
import Input from "./Input";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [...props.comments],
      username: '',
      text: '',
    };
    console.log(props);
  }

  addNewComment = (e, index) => {
    e.preventDefault();
    const comments = this.state.comments.slice();
    comments.push({ username: 'derpWanda', text: this.state.text })
    this.setState({ comments: comments, text: ""})
  }

  changeComment = e => {
    e.preventDefault();
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />
        })}
        <Input 
          add={this.addNewComment}
          change={this.changeComment}
          value={this.state.text}/>
      </div>
    )
  }
}

// const CommentSection = props => {
//   return (
//     <div>
//       {props.comments.map(commentObj => {
//         return (
//           <div>
//             <Comment comment={commentObj} />
//           </div>
//         );
//       })}
//       <input
//         type="text"
//         name="new comment"
//         placeholder="enter new comment..."
//       />
//     </div>
//   );
// };

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired
};


export default CommentSection;
