import React, { Component } from 'react';
import './postcontainer.css'
import { FaInstagram,FaSearch,FaThumbsUp, FaHeart,FaComment,FaUserCircle,FaCompass  } from 'react-icons/fa';



class PostContainer extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props.postsFromAppProps)
      return (
        <ul className="PostContainer">{this.props.postsFromAppProps.map(post =>{
            return(<li>
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
                <span>{post.likes}L</span>
               <span>{post.likes}C</span>
               
               </div>
           </div>
               <div></div>
               </li>)
            
        })}
       
        </ul>
      );
    }
  }
  
  export default PostContainer ;