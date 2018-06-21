import React, {
  Component
} from 'react';
import Comment from './Comment';
import './comment-section.css';
import AddAComment from '../CommentSection/AddAComment';
import IconHeaderBar from '../CommentSection/IconHeaderBar';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      username: 'jjashcraft',
      likeHandler: {
        userLiked: false,
        likes: props.likes,},
      postIndex: props.postIndex,
    }
  }
  componentDidMount() {
    let comments;
    if (window.localStorage.getItem(this.props.postIndex)) {
      comments = JSON.parse(window.localStorage.getItem(this.props.postIndex));
    } else {
      comments = this.props.comments;
      window.localStorage.setItem(this.state.postIndex, JSON.stringify(comments));
    }
    this.setState({
      comments
    });
  }

  addComment = (event) => {
    event.preventDefault();
    let comments = this.state.comments.slice();
    let newComment = this.state.newComment;
    comments.push({
      text: newComment,
      username: this.state.username
    });
    window.localStorage.setItem(this.state.postIndex, JSON.stringify(comments));
    this.setState({
      comments: comments
    });

  }
  toggleLike = (event) => {
    if (this.state.likeHandler.userLiked === false) {
      event.target.className = 'fas fa-heart liked-button';
      console.log('plus one like');
      let likes = this.state.likeHandler.likes;
      likes = likes + 1;
      window.localStorage.setItem(this.props.likeIndex, JSON.stringify(this.state.likeHandler));
      this.setState({
        likeHandler: {likes: likes,
        userLiked: true,
      }
    });
  }else {
      
      if (window.localStorage.getItem(this.props.likeIndex)) {
        window.localStorage.removeItem(this.props.likeIndex);
        event.target.className = 'far fa-heart like-button';
        console.log('no more likey');
        let likes = this.state.likeHandler.likes;
        likes--;
        this.setState({likeHandler: {
        userLiked: false,
        likes: likes,}
        })
      } 

    }

  }


  handleChange = (event) => {
    this.setState({
      newComment: event.target.value
    });
  }

  render() {
    return ( <div className = 'comments' >

      <IconHeaderBar userLiked = {
        this.state.likeHandler.userLiked}
      toggleLike = {
        this.toggleLike
      }
      likes = {
        this.state.likeHandler.likes
      }
      /> <ul> {
        this.state.comments.map((comment, index) => {

          return <Comment key = {
            Math.random()
          }
          username = {
            comment.username
          }
          text = {
            comment.text
          }
          />
        })
      } </ul>

      <AddAComment value = {
        this.state.newComment
      }
      handleChange = {
        this.handleChange
      }
      addComment = {
        this.addComment
      }
      /> </div>

    );
  };
};

export default CommentSection;