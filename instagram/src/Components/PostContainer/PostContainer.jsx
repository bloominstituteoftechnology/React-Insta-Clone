import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';


class PostContainer extends React.Component {
    state = {
        posts: [],
        likes: this.props.likes,
        view: { open: false }
    };

    handleClick = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
      };

    toggleCommentView = () => {
        this.setState({
            open: !this.state.open
          });
    }

    render() {
        console.log(this.state.likes);
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
                    <i className="fa fa-heart" aria-hidden="true" onClick={this.handleClick}></i>
                    <i className="fa fa-comment" aria-hidden="true" onClick={this.toggleCommentView.bind(this)}></i> 
                </div>
                <p className='likes'>{this.state.likes} likes</p>
                </section>
                <section className={'commentSectionCollapse' + (this.state.open ? ' in' : '')}>
                    <CommentSection comments={this.props.comments} />
                    
                </section>
            </div>
        );
    }
}

export default PostContainer;