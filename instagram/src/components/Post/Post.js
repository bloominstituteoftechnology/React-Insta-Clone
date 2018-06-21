import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import './Post.css';

// styled-components
const PostContainer = styled.div`
    max-width: 100%;
    margin: 20px auto;
    border: 1px solid lightgrey;
    border-radius: 5px;
`;

const PostHeader = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    margin: 20px auto;

    div:last-child {
        font-weight: bold;
        font-size: 20px;
    }

    img {
        height: 50px;
        border-radius: 50%;
        margin: 0 20px;
    }
`;

const PostImage = styled.div`
    img {
        width: 100%;
    }
`;

const PostNav = styled.div`
    font-size: 28px;
    width: 150px;
    display: flex;
    margin: 10px 20px;

    div {
        &:first-child {
            margin-right: 20px;
        }

        &:hover {
            cursor: pointer;
        }
    }
`;

const PostLikes = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin: 10px 20px;
`;

// Render and return Post with Likes
// Props: key={post.imageUrl} post={post}
class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }

    // componentDidMount() {
    //     if(localStorage.getItem('likes')) {
    //         this.setState({likes: this.state.likes});
    //     } else {
    //         this.handleLike();
    //     }
    // }

    handleLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
        // this.setLike();
       
    };

    // setLike = () => {
    //      localStorage.setItem('likes', this.state.likes);
    // }

    render() {
        return (
            <PostContainer>
                <PostHeader>
                    <div><img src={this.props.post.thumbnailUrl} alt="post-thumbnail" /></div>
                    <div>{this.props.post.username}</div>
                </PostHeader>
                <PostImage>
                    <img src={this.props.post.imageUrl} alt="post-pic" />
                </PostImage>
                <PostNav>
                    <div onClick={this.handleLike}><i className="far fa-heart"></i></div>
                    <div><i className="far fa-comment"></i></div>
                </PostNav>
                <PostLikes>
                    {this.state.likes}
                </PostLikes>

                {/* Pass imageUrl as postId prop and comments as comments prop */}
                <CommentSection
                    postId={this.props.post.imageUrl}
                    comments={this.props.post.comments}
                    timestamp={this.props.post.timestamp}
                />
            </PostContainer>
        );
    }
}

// prop-type check
Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default Post;