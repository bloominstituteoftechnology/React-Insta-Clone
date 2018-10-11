import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


class Post extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
            post : props.post,
            likes: props.post.likes,
        }

    }

    increaseLikes = () => {
console.log("increase");
        this.setState(prevState => {
            return {likes: prevState.likes + 1};
          })
    }


    render(){
    return(
    
        <div className='post'>
    
            <div className='header'>
                 <img src={this.state.post.thumbnailUrl} alt="User thumbNail"></img>
                <h3>{this.state.post.username}</h3>
            </div>
          
            <img src={this.state.post.imageUrl} alt="Posting Pix" onClick={this.increaseLikes}></img>
          
            <div className='emoji'>
                <i  className="far fa-heart" onClick={this.increaseLikes}></i>
                <i className="far fa-comment"></i>
            </div>
          
            <p onClick={this.increaseLikes}>{this.state.likes} likes</p>

            <CommentSection  comments={this.state.post.comments}/>
                  
            
        </div>

    );
    }
}

Post.propTypes = {
    post: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
    })
  };

export default Post;