import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPost = styled.div`
    width: 50%;
    margin: 4% auto;
    border: 1px solid #d3d3d3;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const StyledHeaderImg = styled.img`
    border-radius: 100%;
    width: 8%;
    margin: 3%;
    border: 2px soilid white;
`;
const StyledImg = styled.img`
    max-width: 99%;
`;

const PostContainer = props => {
    return (
        <StyledPost className="post-main">
            <StyledHeader className="post-header">
                <StyledHeaderImg src={props.postInfo.thumbnailUrl} alt="thumbnail" />
                <span>{props.postInfo.username}</span>
            </StyledHeader>
            <StyledImg className="post-img" src = {props.postInfo.imageUrl} alt="instagram post" />
            <div className="post-likes">
                <i onClick={() => props.like(props.index)} className="far fa-heart"></i> <i className="far fa-comment"></i> 
                <div>{props.postInfo.likes}</div>
            </div>
            <CommentSection commentInfo={props.postInfo.comments}
                            commentKey={props.commentKey}
                            addNewComment={props.addNewComment}
                            updateComment={props.updateComment} />
        </StyledPost>
    );
}

PostContainer.propTypes = {
    postInfo: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.object)
    })
};

export default PostContainer;