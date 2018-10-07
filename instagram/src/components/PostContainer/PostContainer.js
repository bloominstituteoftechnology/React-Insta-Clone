import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import "../../App.css";
import PropTypes from 'prop-types';
import dummyData from '../../dummy-data';

/* const PostContainer = props => {  */
class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: this.dummyData,
      comments: null,
      likesCount: 1,
      counter: this.props.likes,
      asyncMessage: ''

    };

  }


  increment = event => {
    event.preventDefault();
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
    console.log("counter: " + this.state.counter)
  }

  render() {
    return (

      <div className="postContainer">
        <header className="header">
          <img className="thumbNail" src={this.props.thumb} alt="thumbnail" />
          <div className="userName">{this.props.char}</div>
        </header>
        <img className="image" src={this.props.image} alt="thumbnail" />


        <div className="iconContainer2">
          <a className="button" id="postIcon1" href="./index.html" onClick={this.increment}></a>
          <a className="button" id="postIcon2" href="./index.html" onClick={this.props.postIcon2}></a>
        </div>

        <div className="likes">{this.state.counter} likes</div>
        <div> <CommentSection comments={this.props.comments} /></div>
        <div className="timeStamp">{this.props.time}</div>

        <footer className="addCommentContainer">
          <div className="menu">
            <ul>
              <li>Students</li>
              <li>Faculty</li>
              <li>What's New</li>
              <li>Tech Trends</li>
              <li>Music</li>
              <li>Log Out</li>
            </ul>
          </div>
          <a className="addComment"
            type="text"
            id="inp1"
            name="username"
            href="./index.html"
            onClick={this.increment}
          >Add a comment... </a>
          <form >
            <input
              className={this.props.type === 'action' ? 'addComment2 visible' : 'addComment2'}
              placeholder="Add comment..."
              type="text"
              id="inp2"
              name="username"
              value={this.props.value}
            />
          </form>
          <a className="button" id="commentDots" href="./index.html" onClick={this.props.postIcon1}></a>
        </footer>

      </div>

    )
  }
}

/*   PostContainer.propTypes = {
    comments: PropTypes.array.isRequired,
    likes: PropTypes.number.isRequired,
    char: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,

  }; */


export default PostContainer;