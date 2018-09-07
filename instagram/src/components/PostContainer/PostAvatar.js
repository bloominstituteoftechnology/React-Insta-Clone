import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostAvatarContainer = styled.div`
    display: flex;
    max-width: 73%;
    margin-left: 13.5%;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid lightgrey;
`;

const PostAvatarH4 = styled.h4`
    margin-top: 10px;
    margin-left: 2.5%;
    font-size: 20px;
    font-weight: bold;
`;

const PostAvatarImg = styled.img`
    margin-left: 2.5%;
    border-radius: 50%;
    height: 60px;
    width: 40%;
`;

function PostAvatar(props) {
    return(
        <PostAvatarContainer>
            <PostAvatarImg 
                className="icon"
                src={props.posterAvatar}
                alt="OP's profile"
            />

            <PostAvatarH4>
                {props.posterName}
            </PostAvatarH4>
        </PostAvatarContainer>
    )
}

PostAvatar.propTypes = {
    post: PropTypes.shape({
      posterName: PropTypes.string.isRequired,
      posterAvatar: PropTypes.string.isRequired,
    })
  };

export default PostAvatar;