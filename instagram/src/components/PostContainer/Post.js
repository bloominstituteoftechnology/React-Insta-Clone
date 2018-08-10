import React from 'react';
import Header from './Header';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
 return (
   <div className='posts-container-wrapper'>
     {props.postList.map((Post, i) => {
       return (
         <div key={i} className='post-border'>
           <Header
             username={Post.username}
             thumbnailUrl={Post.thumbnailUrl}
           />
           <div className='post-image-wrapper'>
             <img
               alt='post thumbnail'
               className='post-image'
               src={Post.imageUrl}
             />
           </div>
           <i onClick={()=>props.addLike(Post)} className="far fa-heart"></i>
           {Post.likes}
           <CommentSection
           comments={Post.comments}
           timestamp={Post.timestamp}
           submitNewComment={props.submitNewComment}
           updateCommentField={props.updateCommentField}
           commentField={props.commentField}
           />
         </div>
       );
     })}
   </div>
 );
};

export default PostContainer;