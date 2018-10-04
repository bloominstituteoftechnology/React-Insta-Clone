import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import rainbowheart from '../../img/rainbowheart.png';
import combubble from '../../img/combubble.png';
import './postContainer.css';
import PropTypes from 'prop-types';
class PostContainer extends React.Component {

    render() {
        return (
            <div className="postContainer">
                <div className="iconHeader"><div ><img className="thumb" src={this.props.InstaData.thumbnailUrl} alt='thumbnail' /></div><div className="usernameText">{this.props.InstaData.username}</div></div>
                <div><img className="main" src={this.props.InstaData.imageUrl} alt='MainPic' /></div>
                <div><img className="likeIcons" src={rainbowheart} alt="rainbowheart" /><img className="likeIcons" src={combubble} alt="commentBubble" /></div>
                <div className="likes">{this.props.InstaData.likes} likes</div>
                <CommentSection key={this.props.InstaData.key} CommentArray={this.props.CommentArray}/>
            </div>
        );
    }
}
PostContainer.propTypes = {
    InstaData: 
        PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string,
                })
            )
        }).isRequired
}

export default PostContainer