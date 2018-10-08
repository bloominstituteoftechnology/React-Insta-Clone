import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import CommentButton from './CommentButton';
import LikeButton from '../SearchBar/LikeButton';
import './postcontainer.css';
import PropTypes from "prop-types";
import dummyData from './dummy-data';

class PostContainer extends Component {
    constructor(){
        super();
        this.state = {
          posts : []
        }
      }
    
      componentDidMount() {
        this.setState ({
            posts : dummyData
        })
      }

      render() {

      return (
        <div className = "postBody">
        {dummyData.map((post, index) => {
            return(<div key={index}>
                <div className = "profileHead">
                    <img className = "profilePick" alt="''" src={post.thumbnailUrl} ></img>
                    <h2>{post.username}</h2>
                </div>
           
                <div>
                    <img className = "postImg" alt="''" src={post.imageUrl} />
                </div>
                
                <div className = "postIcons">
                    <LikeButton />
                    <CommentButton />
                </div>

                <div className = "likeContainer">       
                    <h3>{post.likes} Likes</h3>  
                </div>
                    <CommentSection 
                    comments={post.comments}
                    timestring={post.timestamp}
                    />
                </div>)  
        })}
        </div>
      );
    }
}
  
  PostContainer.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl:PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments:PropTypes.string,
            text: PropTypes.string,
          })
        )
    }.isRequired
  
  
  export default PostContainer ;