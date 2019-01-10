import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexDiv, Icon } from '../styles/basicStyles';
import { PostDate, Comments, CommentInput } from '../styles/CommentSectionStyles';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      addCommentText: "", 
      currentUser: ""
    }
  }

  componentDidMount() {
    if (localStorage.hasOwnProperty(this.props.timestamp)) {
      // get the key's value from localStorage
      let comments = localStorage.getItem(this.props.timestamp);

      // parse the localStorage string and setState
      try {
        comments = JSON.parse(comments);
        this.setState({comments: comments});
      } catch (e) {
        this.setState({comments: this.props.comments});
      }
    } else this.setState({comments: this.props.comments});

    //Check if user logged in, then set currentUser
    const user = localStorage.getItem("currentUser");
    if(user) this.setState({currentUser: user});
  }

  addCommentHandler = (event) => {
    event.preventDefault();
    if(this.state.addCommentText !== "") {
      const newComment = {
        username: this.state.currentUser,
        text: this.state.addCommentText
      }
      this.setState(
        prevState => {
          const comments = prevState.comments.slice();
          comments.push(newComment);
          localStorage.setItem(this.props.timestamp, JSON.stringify(comments));
          return {comments: comments, addCommentText: ""};
        }
      );      
    }
  }

  setCommentText = (event) => {
    this.setState({addCommentText: event.target.value});
  }

  deleteCommentHandler = (event, index) => {
    this.setState(
      prevState => {
        const comments = prevState.comments.filter((comment, i) => i !== index);
        //Remove from local storage
        localStorage.setItem(this.props.timestamp, JSON.stringify(comments));
        return {comments: comments};
      }
    ); 
  }

  render() {
    const d1 = moment(this.props.timestamp, 'MMM DD YYYY, HH:mm:ss a');
    return (
      <div>
        <Comments>{ this.state.comments.map((comment, index) => {
          return (
            <FlexDiv key={comment.text + this.props.timestamp}>
              <Icon>
                <FontAwesomeIcon
                  icon={['fas', 'trash-alt']}
                  size="lg"
                  color= "red"
                  onClick={(event) => this.deleteCommentHandler(event, index)}
                />
              </Icon>
              <Comment comment={comment} />
            </FlexDiv>
          );
          })}
        </Comments>
        <PostDate>
          <Moment fromNow className="date">{d1}</Moment>
        </PostDate>
        <form onSubmit={this.addCommentHandler}>
          <CommentInput type="text" placeholder="Add a comment..." onChange={this.setCommentText} value={this.state.addCommentText}/>
          <input type="submit" hidden />
        </form>
      </div>
    );  
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;