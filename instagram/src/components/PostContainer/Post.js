import React from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardImg, CardBody
} from 'reactstrap';
import CommentSection from '../CommentSection/Comment';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    width: 604px;
    margin: 30px auto;
`

const StyledImg = styled.img`
    width: 30px;
    height: 30px;
    // margin-left: 16px;
    // margin-right: 11px;
    border-radius: 50%;
    margin: 10px 11px 10px 16px;
`

const Like = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin-right: 10px;
`

const PostContainer = props => {
    // console.log(props.userData.comments)
    return (
        <div className='post-container container-fluid'>
            <StyledCard className='card'>
                <div>
                    <StyledImg src={props.userData.thumbnailUrl} alt="thumbnail" />
                    <span className="bold-text">{props.userData.username}</span>
                </div>
                <CardImg top width="100%" src={props.userData.imageUrl} alt="Card image cap" />
                <CardBody>
                    <i className="far fa-heart fa-lg mr-3"></i>
                    <i className="far fa-comment fa-lg fa-flip-horizontal"></i>
                    <Like className='mt-2 mb-2'>{props.userData.likes + ' likes'}</Like>
                    <CommentSection
                        comments={props.userData.comments}
                        postId={props.userData.imageUrl}
                        username={props.username} />
                </CardBody>
            </StyledCard>
        </div>
    )
}

PostContainer.propTypes = PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
}).isRequired;

export default PostContainer;