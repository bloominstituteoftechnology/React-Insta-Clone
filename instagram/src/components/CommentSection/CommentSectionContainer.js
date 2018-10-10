import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
      // user: '',
      // text: '',
    }
  }

//   componentDidMount() {
//     setTimeout(() => {this.setState({comments: this.state.comments})}, 800)
//   }

//   addNewComment = (event) => {
//     event.preventDefault();
//     const comments = this.state.comments.slice();
//     comments.push({username: this.state.user, text: this.state.text});
//     this.setState({comments: comments, text: ""})
// }

//   changeComment = event => {
//     event.preventDefault();
//     this.setState({ text: event.target.value });
//   };

  render() {
    return (
      <div className='comment-wrapper'>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput />
      </div>
    );
  }
}

// render() {
//   return (
//     <div>
//       {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
//       <CommentInput />
//     </div>
//   );
// }
// }



CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;


// import React from "react";

// const Input = props => {
//     return (
//         <form onSubmit={props.add}>
//         <div className="input-box">
//             <div className="inputs">
//         <input type="text" placeholder="Add a comment ..."  name="user" onChange={props.change} value={props.value}/>
//         <i className="fas fa-ellipsis-h"></i>
//         </div>
//         </div>
//         </form>
//     )
// }

// export default Input;