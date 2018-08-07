// import React from 'react';
// import NewPost from  './NewPost';


// const PostContainer = props => {
//     return (
//         <div className='post-wrapper'>
//             {props.posts.map(p => <NewPost key={p.imageUrl} posts={p} />)}
            
//         </div>
//     );
// };

// export default PostContainer;

import React from 'react';
import Header from './Header';
// import ‘./Posts.css’;
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
 return (
   <div className='posts-container-wrapper'>
     {props.postList.map((eachPost, i) => {
       return (
         <div key={i} className='post-border'>
           <Header
             username={eachPost.username}
             thumbnailUrl={eachPost.thumbnailUrl}
           />
           <div className='post-image-wrapper'>
             <img
               alt='post thumbnail'
               className='post-image'
               src={eachPost.imageUrl}
             />
           </div>
           <CommentSection comments={eachPost.comments} />
         </div>
       );
     })}
   </div>
 );
};

export default PostContainer;