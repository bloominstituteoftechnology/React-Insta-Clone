import React from 'react';
import heart from '../../assets/heart.png';
import comment from '../../assets/comment.png';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostContain = styled.div`
    width: 640px;
    margin: 0 auto;
`;

const EachPost = styled.div`
    margin-bottom: 20px;
    border: 1px solid lightgray;
`;

const UsernIcon = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 25px;
`;

const IconThumbnail = styled.img`
    border-radius: 100%;
    width: 45px;
    margin-right: 15px;
`;

const BottomPost = styled.div`
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 20px;
`;

const PostIcons = styled.div`
    padding-top: 5px;
`;

const PcImage = styled.img`
    width: 60px;
`;

const Likes = styled.p`
    margin-top: 0;
`;

const Post = props => {
    return(
        <PostContain>
            {props.posts.map(post => {
                return (
                    <EachPost key={post.username}>
                        <UsernIcon>
                            <IconThumbnail src={post.thumbnailUrl} alt="User Thumbnail" />
                            <span><strong>{post.username}</strong></span>
                        </UsernIcon>
                        <img src={post.imageUrl} alt="Shared Post" />
                        <BottomPost>
                            <PostIcons>
                                <PcImage 
                                    onClick={props.incrementLike} 
                                    src={heart} 
                                    alt="Heart" 
                                />
                                <PcImage src={comment} alt="Comment" />
                            </PostIcons>
                            <Likes>
                                <strong>{post.likes} likes</strong>
                            </Likes>
                            <CommentSection comments={post.comments} />
                        </BottomPost>
                    </EachPost>
                );
            })}
        </PostContain>
    );
}

Post.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string
    }))
}

export default Post;