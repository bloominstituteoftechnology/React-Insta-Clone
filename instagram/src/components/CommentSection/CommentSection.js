import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };   
  }

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      //if id exists, set the comments by that parsed array
      this.setState({comments: JSON.parse(localStorage.getItem(id))});
    } else {
      //call setComments();
      this.setComments();
    }
  }

  componentWillUnmount() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(this.props.postId, JSON.stringify(this.state.comments));
  }

  commentHandler = e => {
    this.setState({comment: e.target.value});
  };

  commentSubmitHandler = e => {
    e.preventDefault();
    alert("Clicked");
    const newComment = {text: this.state.comment, username: 'Leery Jenkins'};
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
  }

  render() {
    return (
    <div>
      {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
      <CommentInput 
      changeHandler={this.commenttextHandler}
      comment={this.state.comment}
      saveHandler={this.commentSubmitHandler}
      />
    </div>
    )
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;


// === redacted 
// import React from 'react';

// const Comments = props => {
    
//     {this.state.dummyData.map(data => {
//       return <p className="App-intro" key={data.id}>
//         <img src={data.thumnailUrl} />
//         {data.username}
//         <img src={data.imageUrl} />
//         {data.likes}
//       </p>
//     })}

// }

// export default Comments;