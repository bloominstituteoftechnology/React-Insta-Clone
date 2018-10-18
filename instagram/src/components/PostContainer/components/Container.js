import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comment from '../../CommentSection/components/Comment';

const PostContainer = styled.div`
    width: 100%;
    border: 1px solid darkgray;
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    padding:25px;
`;
const PostHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
`;
const PostHeaderImg = styled.img`
    height: 60px;
    border-radius: 50px;
    width: auto;
    margin-right: 32px;
`;
const PostBodyImg = styled.img`
    width: 100%;
    margin: 10px 0;
`;
const Likes = styled.div`
    color: darkgray;
    width:100%;
    display: flex;
    justify-content: flex-start;
`;

const Container = props => {
    return ( 
        <div>
            {props.data.map((item, index) => {
                return (
                    <PostContainer key={index}>
                        <PostHeader>
                            <PostHeaderImg src={item.thumbnailUrl} alt="user thumbnail" />
                            {item.username}
                        </PostHeader>
                        <div className="postBody">
                            <PostBodyImg src={item.imageUrl} alt="post" />
                        </div>
                        <Likes>{item.likes} likes</Likes>
                        <Comment comments={item.comments} />
                    </PostContainer> 
                )
            })}
        </div> );
}
Container.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired
    }))
};
 
export default Container;