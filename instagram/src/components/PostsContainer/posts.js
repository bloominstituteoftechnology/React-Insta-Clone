import React from 'react';
import CommentsSection from '../CommentSection/comments';
import "../PostsContainer/poststyle.css";
import heart from "./heart.png";
import comment from "./comment.png";
import PropTypes from 'prop-types';





class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      dummyData:props.dummyData,
      likes:props.dummyData.likes
      


    }
  }

  addLike = (event, i) => {
    event.preventDefault;
    let likes = this.state.likes;
    likes =(likes + 1);
    this.setState({
      likes
    })
    console.log('hello')
  }

  // addNewComment = (event, i) => {
  //   event.preventDefault();
  //   const comments = this.state.comments.slice();
  //   comments.push({text: this.state.input, username:'Stickmonster89'});
  //   this.setState({
  //       comments, 
  //       input:"", 

  render() {
  return  (
    <div className="postcont">
      <div className="philz">
        <img src={this.state.dummyData.thumbnailUrl} alt="user thumbnail"/>
        <p>{this.state.dummyData.username}</p>
      </div>
      <div className="imgurl">
        <img onClick={this.addLike} src={this.state.dummyData.imageUrl} alt="image"/>
      </div>
      <div className="content">
        <div className="smallerimg">
          <img className="smallimg" src={heart} alt="heart" onClick={this.addLike}/>
          <img className="smalling" src={comment} alt="comment"/>

        </div>
        <div className="likes">
        <p>{this.state.likes}</p>
        </div>
        <div className="textcomment">
        <CommentsSection dummyData={this.state.dummyData.comments} />
        </div>
      </div>
    </div>
  )
}
}

Posts.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
    thumbnailUrl:PropTypes.string,
    username:PropTypes.string,
    imageUrl:PropTypes.string,
    likes:PropTypes.number
  })
)
};

 
export default Posts 
