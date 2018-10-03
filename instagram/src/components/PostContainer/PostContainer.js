import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import '../PostContainer/PostContainer.css'

class PostContainer extends React.Component {
    render() {
        return (
            <div className={'postContainer'}>
                <div className={'postTop'}>
                    <img src={this.props.post.thumbnailUrl} />
                    <div className={'usernameTop'}>{this.props.post.username}</div>
                </div>
                <img src={this.props.post.imageUrl} />
                <CommentSection comments={this.props.post.comments}/>
            </div>
        )
    }
}

export default PostContainer;