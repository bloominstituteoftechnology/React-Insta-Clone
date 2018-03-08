import React, { Component } from 'react';
import Comments from './comments.js';
import Moment from 'react-moment';

const Post = (props) => {
  return (
    <div className='post'>
      <div className='post_column'>
        {props.posts.map((post) => {
          return (
              <div className='post_center'>
                <div className='title'>
                  <div className='user'>
                    <div><img className='user_img' src={post.thumbnailUrl} alt={post.username} /></div>
                    <div className='user_name'>{post.username}</div>
                  </div>
                </div>
                <div className='image'><img src={post.imageUrl} alt='post'/></div>
                <div className='like-quote'>
                  <div className='like-quote_button'><i class="fa fa-heart-o" aria-hidden="false"></i></div>
                  <div className='like-quote_button'><i class="fa fa-comment-o" aria-hidden="true"></i></div>
                </div>
                <div className='likes'>{post.likes + ' likes'}</div>
                <div className='comments_wrapper'>
                  <Comments comments={post.comments} />
                </div>
                <div className='time'>{post.timestamp}</div>
                <div className='add_comment' onChange=''>
                  <input className='comment_field' placeholder=' Add a comment...' onSubmit=''></input>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
}

// class Post extends Component {
//   constructor() {
//     super();
//     this.state = {
//       posts: []
//     }
//   }
//
//   componentDidMount(props) {
//     this.setState({posts: props});
//   }
//
//   render() {
//     return (
//       <div className='post'>
//         <div className='post_column'>
//           {this.state.posts.map((post) => {
//             return (
//                 <div className='post_center'>
//                   <div className='title'>
//                     <div className='user'>
//                       <div><img className='user_img' src={post.thumbnailUrl} alt={post.username} /></div>
//                       <div className='user_name'>{post.username}</div>
//                     </div>
//                   </div>
//                   <div className='image'><img src={post.imageUrl} alt='post'/></div>
//                   <div className='like-quote'>
//                     <div className='like-quote_button'><i class="fa fa-heart-o" aria-hidden="false"></i></div>
//                     <div className='like-quote_button'><i class="fa fa-comment-o" aria-hidden="true"></i></div>
//                   </div>
//                   <div className='likes'>{post.likes + ' likes'}</div>
//                   <div className='comments_wrapper'>
//                     <Comments comments={post.comments} />
//                   </div>
//                   <div className='time'>{post.timestamp}</div>
//                   <div className='add_comment' onChange=''>
//                     <input className='comment_field' placeholder=' Add a comment...' onSubmit=''></input>
//                   </div>
//                 </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

export default Post;
