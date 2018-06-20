import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dummyData: props.dummyData,
            likes: props.dummyData.likes
        }
    }

    addLikes = (event, i) => {
        event.preventDefault();
        let likes = this.state.likes;
        likes = (likes + 1);
        this.setState({likes});
    }

    render() {
        return (
            <div className="custom-post">
                <div className="post-header">
                    <img src={this.state.dummyData.thumbnailUrl} alt="user thumbnail"/>
                    <p><strong>{this.state.dummyData.username}</strong></p>
                </div>
                <div className="post-img">
                    <img src={this.state.dummyData.imageUrl} alt="post content"/>
                </div>
                <div className="post-comments">
                    <div className="comment-interaction">
                        <i onClick={this.addLikes} className="fa">&#xf08a;</i>
                        <i className="fa">&#xf0e5;</i>
                    </div>
                    <p className="custom-likes" align="left"><strong>{this.state.likes} likes</strong></p>
                    <CommentSection dummyData={this.state.dummyData.comments} />
                </div>            
            </div>
        )
    }
    
}

PostContainer.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            thumnailUrl: PropTypes.string,
            username: PropTypes.string,
            imageURL: PropTypes.string,
            likes: PropTypes.number
        })
    )
};

 
export default PostContainer;
