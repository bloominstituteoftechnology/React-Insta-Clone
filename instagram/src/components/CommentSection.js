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

    componentDidMount() {

    }

    componentDidUpdate () {

    }

    setComments = () => {
        localStorage.setItem(
         this.props.postId,
         JSON.stringify(this.state.comments)
        );
      };
      
      commentHandler = elem => {
        this.setState({ comment:elem.target.value });
      }
      
      commentSubmitHandler = elem => {
        elem.preventDefault();
        const addNewComment = {text: this.state.comment, username: 'Interent Rando'}
        const comments=this.state.comments.slice();
        comments.push(addNewComment);
        this.setState({comments, comment: ' '})
      
      }

    render () {
        return (
            <div>
            {this.state.comments.map((comments, input) => <Comment key={input} comment={comments} />)}
            <CommentInput 
              comment={this.state.comment}
              submitAComment={this.commentSubmitHandler}
              changeAComment={this.commentHandler}
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
        <form onSubmit = {props.submitAComment}>
            <input 
                type="text"
                value={props.comment}
                placeholder="Add a comment"
                onChange={props.changeAComment}
            />
        </form>

        </div>
    )
}

// const Comment2 = props => {
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





  CommentSection.propTypes={
    comments:PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
}

export default CommentSection


 

