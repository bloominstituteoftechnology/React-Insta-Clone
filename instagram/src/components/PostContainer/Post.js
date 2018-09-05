import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            likes: this.props.post.likes

        }
    }


    incrementLike = e => {
        e.preventDefault();
        this.setState({likes: this.state.likes + 1});
    };

    render() {
        return(
            <div className="post">
                <div className="post-header">
                    <img className="post-thumbnail" src={this.props.post.thumbnailUrl} alt={"User's Thumbnail"}/>
                    <div className="post-username">{this.props.post.username}</div>
                </div>
                <img className="post-image" src={this.props.post.imageUrl} alt={"User's Post"}/>
                <div className="like-icons">
                    <div className="like-icon-divider" onClick={this.incrementLike}>
                        <i class="far fa-heart"></i>
                    </div>
                    <i class="far fa-comment"></i>
                </div>
                <div className="likes">{this.state.likes} likes</div>
                <CommentSection comments={this.props.post.comments}/>
             </div>
        )
    }
}



export default Post;