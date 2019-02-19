import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }


  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)){
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))

      });
    }
    else{
      this.setComments();
    }
  }

  componentWillUnmount(){
    this.setComments();
  }



  addComment = (e, comment) => {
    e.preventDefault();
    const newComment = {
      text: Date.now(),
      username: " "
      
     };
    this.setState({
      posts: [...this.state.posts, newComment]
    });
  };


  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        <CommentInput />
       
      </div>
    );
  }
}



CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
};

export default CommentSection;
