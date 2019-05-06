import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';


class PostContainer extends React.Component {
    state = {
        posts: [],
        likes: ''
    };

    render() {
        console.log(this.props);
        return (
            <div className='postContainer'>
                <div className='postHeader'>
                    <img src={this.props.thumbnail} alt='' className="thumbnailImg" />
                    <h3 className='username'>{this.props.username}</h3>
                </div>
                <section className='postImg'>
                    <img src={this.props.imageUrl} alt='' />
                </section>
                <section className='commentsHeader'>
                <div className='postIcons'>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <i className="fa fa-comment" aria-hidden="true"></i> 
                </div>
                <p className='likes'>{this.props.likes} likes</p>
                </section>
                <section className='commentSection'>
                    <CommentSection comments={this.props.comments} />
                    
                </section>
            </div>
        );
    }
}

export default PostContainer;