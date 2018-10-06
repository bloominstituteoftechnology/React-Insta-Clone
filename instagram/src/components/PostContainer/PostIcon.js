import React, { Component } from 'react';
import heartOutline from"../../images/heartOutline.png";
import comment from"../../images/comment.png";

class PostIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      likes : 0
    }
  }

  componentDidMount(){
    this.setState({likes: this.props.likes})
  }

  handleCount = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ likes: prevState.likes + 1 }));
  }

  render() { 
    return (  
      <>
        <div className="post-icon">
          <img src={heartOutline} alt="heart" onClick = {this.handleCount}/>
          <img src={comment} alt="comment"/>
        </div>
        <p className="likes"> {this.state.likes} likes</p> 
      </>
    );
  }
}
 
export default PostIcon;