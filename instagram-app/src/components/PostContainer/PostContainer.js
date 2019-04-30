
import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


const Post = props => {

    return (

        <div className="post-container">
            <div className = "post-header">        
                <img src={props.post.thumbnailUrl} alt={props.post.username} />
                <p>{props.post.username}</p>
            </div>
            
            <div className = "post-body">
                <img src={props.post.imageUrl} alt={props.post.username} />
                <p> {props.post.likes} likes</p>
            </div>

            <div className = "post-comments">
                <CommentSection comments={props.post.comments}/>
            </div>

            <div className = "add-comment-box">
                <form>
                    <input 
                     type="text"
                     name="comment"
                     placeholder="Add a comment..."
                    />
                </form>
            </div>
            
        </div>

    )



}


export default Post





// dummyData =
// post 1: {
//     props.post.username: "philzcoffee",
//     props.post.thumbnailUrl:
//       "https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg",

//     props.post.imageUrl:
//       "https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg",
//     props.post.likes: 400,
//     props.post.timestamp: "July 17th 2017, 12:42:40 pm",

// Comment Section 
//     props.post.comments: [
//       {
//         username: "philzcoffee",
//         text:
//           "We've got more than just delicious coffees to offer at our shops!"
//       },
//       {
//         username: "biancasaurus",
//         text: "Looks delicious!"
//       },
//       {
//         username: "martinseludo",
//         text: "Can't wait to try it!"
//       }
//     ]
//   }