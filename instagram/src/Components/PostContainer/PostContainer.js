import React from "react";
import './PostContainer.css';
// import CommentSection from "../CommentSection";

class PostContainer extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="post-container">
                {/* Header Container */}
                <div className="header-container">
                    {/* User image and username */}
                    <img src={this.props.userImg} alt="User" className="user-img"/>
                    <p className="username">{this.props.userName}</p>
                </div>
                {/* Post image*/}
                <img src={this.props.postImg} alt="Post" className="post-img"/>
                {/* Like and Comment Icons + Llke Counter */}
                <div className="post-interaction">
                    {/* Icons */}
                    <div className="post-icons">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                    </div>
                    {/* Like Counter */}
                    <p className="likes">
                        {this.props.likes} Likes
                    </p>
                </div>
            </div>    
        )
    }
}

export default PostContainer;