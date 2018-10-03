import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
class PostContainer extends React.Component {

    render() {
        return (
            <div className="postContainer">
                <div><img src={this.props.InstaData.thumbnailUrl} alt='thumbnail' />{this.props.InstaData.username}</div>
                <div><img src={this.props.InstaData.imageUrl} alt='MainPic' /></div>
                <div>put icons</div>
                <div>{this.props.InstaData.likes} likes</div>
                <CommentSection key={this.props.key} CommentArray={this.props.CommentArray}/>
            </div>
        );
    }
}

export default PostContainer