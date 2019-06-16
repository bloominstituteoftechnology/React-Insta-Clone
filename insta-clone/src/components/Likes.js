//Likes
import React from 'react';
import './PostContainer.css';
import Heart from './img/icons8-heart-50.png';
//Here the likes section is separated into its own component because it will
//need a method built on to it to increment the likes. Eventually it will be
//built out into a class container to deal with its own functionality.
class Likes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      likes: props.likes
    }
  }

likePost = () => {
  this.setState((prevState)=>{return {likes: prevState.likes +1}});
}

  render(){
  return(
    <div>
    <div className="heart">
      <img
      alt="insta-heart"
      src={Heart}
      onClick={this.likePost}
      />
    </div>
    <div className="likes">
      <strong>{this.state.likes} likes</strong>
    </div>
    </div>
  )
}
}

Likes.propTypes = {

}
export default Likes;
