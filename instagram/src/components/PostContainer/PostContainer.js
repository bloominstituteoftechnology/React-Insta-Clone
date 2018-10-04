import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import rainbowheart from '../../img/rainbowheart.png';
import combubble from '../../img/combubble.png';
import './postContainer.css'
class PostContainer extends React.Component {

    render() {
        return (
            <div className="postContainer">
                <div><img className="thumb" src={this.props.InstaData.thumbnailUrl} alt='thumbnail' />{this.props.InstaData.username}</div>
                <div><img className="main" src={this.props.InstaData.imageUrl} alt='MainPic' /></div>
                <div><img className="likeIcons" src={rainbowheart} alt="rainbowheart" /><img className="likeIcons" src={combubble} alt="commentBubble" /></div>
                <div>{this.props.InstaData.likes} likes</div>
                <CommentSection key={this.props.key} CommentArray={this.props.CommentArray}/>
            </div>
        );
    }
}

export default PostContainer