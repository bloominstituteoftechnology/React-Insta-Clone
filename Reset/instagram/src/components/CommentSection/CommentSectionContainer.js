import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: "",
      newLike: props.likes
    };
  }
 

  addNewComment = event => {
    // const comments = this.state.comments;
    // comments.push({...newComment});
    // this.setState(comments);
    event.preventDefault();
    this.setState({comments:[...this.state.comments, {username: "Despacito Y Beuna Letra", text: this.state.newComment}]})
    event.currentTarget.firstElementChild.value = "";
     

  };


    inputText = event => {
      let newComment = event.currentTarget.value;
      this.setState({newComment: newComment})
    };

    // addNewLike = () => {
    //   this.setState(this.state.likes.map(like => like + 1))
    // }

    newLike = event => {
      console.log(event.currentTarget);
      // let newLike = event.currentTarget.l;
      // this.setState({newLike: props.likes.map(like => like + 1)});
    }

  render() {
    // console.log(this.state.handleLike);
    return (
      <div className="commentarea">
      <div className="commenticons">
      <img className="small1" src ="https://image.flaticon.com/icons/png/512/54/54966.png" alt="Heart" onClick={this.newLike}/>
      <img className="small2" src ="https://cdn3.iconfinder.com/data/icons/eldorado-stroke-basic/40/comment_baloon-512.png" alt="Comment"/>
      </div>
        <div className="likes">{this.props.likes} likes</div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput handleaddNewComment= {this.addNewComment} inputText={this.inputText}/>
      </div>
    );
  }
};


CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
