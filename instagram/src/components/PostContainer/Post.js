import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';


// class Post extends React.Component {
//     state = {
//         likes: this.props.post.likes
//     };

//     like = () => {};

//     render() {
//         return(
//         <div className="Post-Container">
//             <img src={this.props.post.thumbnailUrl} alt={"user's thumbnail"}/>
//             <div>{this.props.post.username}</div>
//             <img src={this.props.post.imageUrl} alt ={"user's post"}/>
//         </div>
//         )
//     }
// }

const Post = props => {
    return (
        <div className="post">
            <div className="post-header">
                <img className="post-thumbnail" src={props.post.thumbnailUrl} alt={"User's Thumbnail"}/>
                <div className="post-username">{props.post.username}</div>
            </div>
            <img className="post-image" src={props.post.imageUrl} alt={"User's Post"}/>
            <div className="like-icons">
                <div className="like-icon-divider">
                    <i class="far fa-heart"></i>
                </div>
                <i class="far fa-comment"></i>
            </div>
            <div className="likes">{props.post.likes} likes</div>
            <CommentSection comments={props.post.comments}/>
        </div>
        
    )
}

export default Post;