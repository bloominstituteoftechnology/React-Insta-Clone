import React from "react";
import CommentSection from './../CommentSection/CommentSection';
import moment from './../../../node_modules/moment';
import PropTypes from 'prop-types';
import './Post.css'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.post.comments
        }
    }

    render() {
        console.log(this.state.posts);
        return(
            <div className="post-container container">
                <div className="user-info ">
                    <div><img src={this.props.post.thumbnailUrl} alt=""/></div>
                    <div>{this.props.post.username}</div>
                </div>
                <div className="post-image">
                    <img src={this.props.post.imageUrl} alt=""/>
                </div>  
                <div className="likes container">
                    <div className="icons">
                        <i className="fa fa-heart-o"></i>
                        <i className="fa fa-comment-o"></i>
                    </div>
                    <div className="count">
                    {this.props.post.likes} likes </div>
                </div>
                <div className="comments">
                    <CommentSection comments={this.state.comments}/>
                </div>    
                <div className="timestamp">
                    {moment().startOf('hour').fromNow()}
                </div>
            </div>
        )
    }
}
// const Post = props => {
    
// }
Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        links: PropTypes.number
    }) 
};
export default Post;