import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


import styled from 'styled-components';


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
            <PostContainerStyle>
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
            </PostContainerStyle>
        );
    }
}

const PostContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    width: 90%;
    border: 1px solid rgb(230, 230, 230);
    
    .postHeader {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .thumbnailImg {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin: 10px;
    }
    
    img {
        height: auto;
        width: 100%;
    }
    
    .commentHeader {
        display: flex;
        justify-content: flex-start;
        margin: 0
    }
    
    .postIcons .fa-heart {
        font-size: 2rem;
        margin: 10px;
    }
    
    .postIcons .fa-comment {
        font-size: 2rem;
        margin: 10px;
    }
    
    .postIcons {
        display: flex;
        justify-content: flex-start;
        margin: 10px 10px;
    }
    
    .likes {
        display: flex;
        justify-content: flex-start;
        margin: 10px 10px;
    }
    
    .likes p {
        margin: 0;
    }
    
    .commentSectionCollapse {
        display: none
    }
    
    .commentSectionCollapse.in {
        display: flex
    }
    `

export default PostContainer;