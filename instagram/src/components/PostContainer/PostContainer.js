import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import AddComment from '../AddComment/AddComment';
import moment from 'moment';

const PostContainer = props =>{
    console.log(props.data.timestamp.split(',')[0]);
    console.log(moment(new Date()).format('LLL').split(',')[0])
    let a = moment([new Date()]).format('LLL')
    let b = props.data.timestamp.split(", ")[0]
    //let c = a.from(b);
    //console.log(c)
    return(
        <div className="container">
            <div className="post-header">
                <div className="user-icon">
                    <img className="profile-pic" src={props.data.thumbnailUrl} alt="logo"/>
                </div>
                <div className="user-name">
                    {props.data.username}
                </div>
            </div>
            <div className="main-image">
                <img src={props.data.imageUrl} alt="post"/>
            </div>
            <div className="post-content">
                <div className="post-icons">
                    <div className="heart"></div>
                    <div className="chat"></div>
                </div>
                <div className="likes">
                    <div className="likes-container">
                        {props.data.likes} likes
                    </div>
                </div>
                <div className="comments">
                    <div className="comments-container">
                        {props.data.comments.map((comment,i) => <CommentSection key={i} data={comment}/>)}
                    </div>
                </div>
                <div className="timestamp">
                    <span>{b}</span>
                </div>
                <div className="hr">
                </div>
                <AddComment comment={props.comment}/>
            </div>
        </div>
    )
}

export default PostContainer;