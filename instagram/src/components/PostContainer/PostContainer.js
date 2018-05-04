import React from 'react';
import './PostContainer.css';
import heart from '../assets/heart.png';
import comment from '../assets/comment.png';
import CommentSection from '../CommentSection/CommentSection.js';
import data from '../../dummy-data.js'; 

class PostContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            thumbnailUrl: "",
            username: "",
            imageUrl: "",
            likes: 0,
            timestamp: "",
            comments: []
        };
    }

    componentDidMount() {
        this.setState({
            thumbnailUrl: data.map(i => i.thumbnailUrl),
            username: data.map(i => i.username),
            imageUrl: data.map(i => i.imageUrl),
            likes: data.map(i => i.likes),
            timestamp: data.map(i => i.timestamp),
            comments: data.map(i => i.comments)
        });
    }
    render() {
        return (
            data.map(i => { 
                return (

            <div key={i.username} className="post">
                <div className="post-header">
                            <img src={i.thumbnailUrl} className="post-profile"/>
                    <p>{i.username}</p>
                </div>
                <img src={i.imageUrl} className="post-img"/>
                <div className="post-bottom">
                    <div className="icons-wrapper">
                        <a className="post-icon" onClick=""><img src={heart} id="post-heart"/></a>
                        <a className="post-icon" onClick=""><img src={comment} id="post-heart"/></a>
                    </div>
                    <p className="likes">{i.likes}</p>
                    <CommentSection comments={i.comments}/>
                    <p className="post-date">{i.timestamp}</p>
                    <div className="comments-divider"></div>
                    <form className="comments-input" onSubmit="">
                        <input type="text" placeholder="Add a comment..."></input>
                        <a className="comments-menu" onClick="">...</a>
                    </form>
                </div>
            </div>
                );
            })
        );
    }
}

export default PostContainer;