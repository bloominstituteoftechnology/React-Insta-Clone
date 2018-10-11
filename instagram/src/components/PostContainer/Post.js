import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {WrapperDiv, Header, HeaderImg, HeaderH3, PostImg } from "./Styles";

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
    
        <WrapperDiv>
    
            <Header>
                 <HeaderImg src={this.state.post.thumbnailUrl} alt="User thumbNail" />
                <HeaderH3>{this.state.post.username}</HeaderH3>
            </Header>
          
            <PostImg src={this.state.post.imageUrl} alt="Posting Image" onClick={this.increaseLikes} />
          
            <div className='emoji'>
                <i  className="far fa-heart" onClick={this.increaseLikes}></i>
                <i className="far fa-comment"></i>
            </div>
          
            <p onClick={this.increaseLikes}>{this.state.likes} likes</p>

            <CommentSection  comments={this.state.post.comments}/>
                  
            
        </WrapperDiv>

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