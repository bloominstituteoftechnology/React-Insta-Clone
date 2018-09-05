import React from 'react';
import PostHeader from './PostHeader.js';
import CommentSection from '../CommentSection/CommentSection.js';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }

    incrementLike = () => {
        let likes = this.state.likes +1;
        this.setState({likes});
    }

    render() {
        return (
            <div className='post-container'>
                <PostHeader username={this.props.post.username} thumbnailUrl={this.props.post.thumbnailUrl} />
                <div className='post-image'>
                    <img src={this.props.post.imageUrl} />
                </div>
                <CommentSection 
                  postId={this.props.post.imageUrl}
                  comments={this.props.post.comments} />
            </div>
        );
    }
}


// const PostContainer = props => {
//     return (
//         <div className='post-container'>
//             <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
//             <div className='post-image'>
//                 <img src={props.post.imageUrl} />
//             </div>
//             <CommentSection 
//               postId={props.post.imageUrl}
//               comments={props.post.comments} />
//         </div>
//     );
// }

export default PostContainer;