import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection.js'
import './PostContainer.css';

    const PostContainer = (props)   =>  {
       
       return(
           <div className="postContainer">
               <div className="postHeader">
                   <img className= "thumbnail" src={props.dummyData.thumbnailUrl} />
                   <div className="username">
                        {props.dummyData.username}
                   </div>
               </div>
               <img className="postImage" src={props.dummyData.imageUrl} />
               <div className="postButtons">
                   <i className="far fa-heart"></i>
                   <i className="far fa-comment"></i>
               </div>
               <div className="likes">
                   {props.dummyData.likes} likes
               </div>
               <CommentSection timestamp={props.dummyData.timestamp} content={props.dummyData.comments}/>
           </div>
       )
   }

export default PostContainer;