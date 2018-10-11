import React from 'react'
import './PostContainer.css'
import Likes from '../PostContainer/Likes'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: props.post.likes
        }
    }

    addLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes })
    }
    
    render() {
        return (
            <div className="post">
                <div className="user">
                    <div className="user-photo">
                        <img src={this.props.post.thumbnailUrl} alt=""/>
                    </div>
                    <div className="user-name">
                        {this.props.post.username}
                    </div>
                </div>
                <div className="image">
                    <img src={this.props.post.imageUrl} alt=""/>
                </div>
                <Likes 
                    addLike={this.addLike}
                    likes={this.state.likes}
                />
                <CommentSection 
                    postId={this.props.post.imageUrl}
                    comments={this.props.post.comments}
                />
            </div>
        )
    }
}


// Post.propTypes = {
//     post: PropTypes.arrayOf(
//         PropTypes.shape({
//             username: PropTypes.string,
//             thumbnailUrl: PropTypes.string,
//             imageUrl: PropTypes.string,
//             likes: PropTypes.number,
//             timestamp: PropTypes.string,
//             comments: PropTypes.arrayOf(
//                 PropTypes.shape({
//                     username: PropTypes.string,
//                     text: PropTypes.string
//                 }).isRequired
//             )
//         })
//     ).isRequired
// }

export default Post

