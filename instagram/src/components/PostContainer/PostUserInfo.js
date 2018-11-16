import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
    border-bottom: 1px solid #efefef;
    height: 60px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .user-info--thumbnail {
        cursor: pointer;
        align-self: center;
        margin-bottom: 2px;
        display: block;
        position: relative;
        height: 100%;
        img {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, .0975);
        }
    }
    .user-info--name {
        padding-top: 0px;
        padding-left: 12px;
        display: flex;
        align-content: center;
        h2 {
            color: #262626;
            font-weight: 600;
            font-size: 0.9rem;
        }
    }
`;

const PostUserInfo = (props) => {
    return (
        <Div className="post--user-info">
            <div className="user-info--thumbnail">
                <img src={props.thumbnailUrl} alt="" />
            </div>
            <div className="user-info--name">
                <h2>{props.username}</h2>
            </div>
        </Div>
    );
};

PostUserInfo.propTypes = {
    thumbnailUrl : PropTypes.string,
    username     : PropTypes.string
};

export default PostUserInfo;
