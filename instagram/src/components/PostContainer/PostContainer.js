import React from 'react'
import CommentSection from '../CommentSection/CommentSection';
import rainbowheart from '../../img/rainbowheart.png';
import combubble from '../../img/combubble.png';
import './postContainer.css';
import PropTypes from 'prop-types';
class PostContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            likes: props.InstaData.likes,
            
        }
    }
    addlike = () =>{
        this.setState({
            likes: this.state.likes + 1,
        }) 
        console.log()
    }
    render() {
        console.log(this.state)
        return (
            <div className="postContainer">
                <div className="iconHeader"><div ><img className="thumb" src={this.props.InstaData.thumbnailUrl} alt='thumbnail' /></div><div className="usernameText">{this.props.InstaData.username}</div></div>
                <div><img className="main" src={this.props.InstaData.imageUrl} alt='MainPic' /></div>
                <div><img onClick={this.addlike} className="Icons likeIcon" src={rainbowheart} alt="rainbowheart" /><img className="Icons" src={combubble} alt="commentBubble" /></div>
                <div className="likes">{this.state.likes} likes</div>
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