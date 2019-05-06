import React from 'react';
import CommentSection from '../CommentSection/CommentSection';



class PostContainer extends React.Component {
    state = {
        posts: [],
        likes: ''
    };

    render() {
        return (
            <div className='postContainer'>
                <div className='postHeader'>
                    <img src={this.props.thumbnail} alt='' />
                    <h3 className='username'>{this.props.username}</h3>
                </div>
                <section className='postImg'>
                    <img src={this.props.imageUrl} alt='' />
                </section>
                <div className='postIcons'>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <i className="fa fa-comment" aria-hidden="true"></i>
                </div>
                <p className='likes'>{this.props.likes} likes</p>
                <section className='commentSection'>
                    <CommentSection comments={this.props.comments} />
                </section>
            </div>
        );
    }
}

export default PostContainer;