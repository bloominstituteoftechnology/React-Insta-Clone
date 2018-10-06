import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './postcontainer.css'
import { FaInstagram,FaSearch,FaThumbsUp, FaHeart,FaComment,FaUserCircle,FaCompass  } from 'react-icons/fa';



class PostContainer extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props.postsFromAppProps)
      return (
        <ul className="PostContainer">{this.props.postsFromAppProps.map((post, index) =>{
            return(<li key={index}>
                <div className="authorsPost">
               <img src={post.thumbnailUrl} className="authorsPost--thumbnailUrl"></img>
               <h2 className="authorsPost--username">{post.username}</h2>
           </div>
           <div className="PostImage">
           <img src={post.imageUrl} className="PostImage--image"/>
           </div>
           
           <div className="LikeCommentsIcon">
               <div >
               <FaThumbsUp className="FaThumbsUp"/>
               <FaComment  className="FaComment"/>
               </div>
               <div> 
                <span>{post.likes} <strong>Likes</strong></span>
               <span>{post.comments.length} <strong>Comments ...</strong></span>
               
               </div>
           </div>
               <div><CommentSection 
               Comments={post.comments}
               timestring={post.timestamp}
               /></div>
               <div></div>
               </li>)
            
        })}
       
        </ul>
      );
    }
  }
  
  export default PostContainer ;