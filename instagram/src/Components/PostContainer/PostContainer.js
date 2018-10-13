import React from "react";
import './PostContainer.css';
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            noLike: 'far fa-heart',
            like: 'hidden',
        }
    }
    componentDidMount() {
        this.setState(state => ({
            likes: this.props.likes,
        }))
    }

    likeHandler = () => {
        this.setState(state => ({
            likes: this.state.likes + 1,
            noLike: 'hidden',
            like: 'fas fa-heart',
        }))
    }

    dislikeHandler = () => {
        this.setState(state => ({
            likes: this.state.likes - 1,
            noLike: 'far fa-heart',
            like: 'hidden',
        }))
    }

    render() {
        return (
            <div className="post-container">
                {/* Header Container */}
                <div className="header-container">
                    {/* User image and username */}
                    <img src={this.props.userImg} alt="User" className="user-img"/>
                    <p className="username">{this.props.username}</p>
                </div>
                {/* Post image*/}
                <img src={this.props.postImg} alt="Post" className="post-img"/>
                {/* Like and Comment Icons + Llke Counter */}
                <div className="post-interaction">
                    {/* Icons */}
                    <div className="post-icons">
                        <i className={this.state.noLike} onClick={this.likeHandler}></i>
                        <i className={this.state.like} onClick={this.dislikeHandler}></i>
                        <i className="far fa-comment"></i>
                    </div>
                    {/* Like Counter */}
                    <p className="likes">
                        {this.state.likes} likes
                    </p>
                </div>
                <CommentSection content={this.props.comments} timestamp={this.props.timestamp}/>
            </div>    
        )
    }
}

export default PostContainer;