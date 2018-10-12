import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import "../../App.css";
import PropTypes from 'prop-types';
import dummyData from '../../dummy-data';


class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: this.dummyData,
      comments: this.props.comments,
      likesCount: 1,
      display: false,
      counter: this.props.likes
    };

  }

 
  increment = event => {
    event.preventDefault();
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
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
          <div className="button" id="postIcon1" onClick={this.increment}></div>
          <div className="button" id="postIcon2" onClick={this.props.postIcon2}></div>
        </div>

        <div className="likes">{this.state.counter} likes</div>
        <div> <CommentSection comments={this.props.comments} timeStamp={this.props.time} keyIndex={this.props.keyIndex} /></div>
       

       
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