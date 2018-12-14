import React from 'react';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    render () {
        return (
            <div>
            {this.state.comments.map((comments, input) => <Comment key={input} comment={comments} />)}
            <CommentInput 
              comment={this.state.comment}
             />
          </div>
        )
    }
}


//goes with <Comment /> 
const Comment = props => {
    return (
      <div className="comment-text">
        <div className="comment">{props.comment.text}</div>{' '}
        <div className="user">-{props.comment.username}</div>
      </div>
    );
  };


Comment.PropTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

const CommentInput = props => {
    return (
        <div className="comment-text">
        <form>
            <input 
                type="text"
                value={props.comment}
                placeholder="Add a comment"
            />
        </form>

        </div>
    )
}

// const Comment = props => {
//     return (
//       <div className="comment-text">
//         <form onSubmit = {props.submitAComment}> 
//           <input type="text"
//           value={props.comment}
//           placeholder="Add a comment"
//           onChange={props.changeAComment}
//            />
          
//         </form>
//       </div>
//     );
//   };

export default CommentSection


 

