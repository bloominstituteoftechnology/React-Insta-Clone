import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import Post from '../PostContainer/Post';
import Icons from '../Icons';
import styled from  'styled-components';

const CommentBox = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    text-align: left;
`;

const Time = styled.p`
  width: 80%;
  margin: 0 83px;
  text-align: left;
  margin-top: 5px;
  padding: 10px;
  color: #a9a9a9;
  font-size: 12px;
  margin-bottom: 15px;
  border-bottom: 1px solid #d3d3d3;
`;

const Likes = styled.p`
    width: 80%;
    margin: 10px 90px;
    display: flex;
    font-weight: bold;
`;

const PostContainer = (props) => {
    return (
        <div className="post">
            <div>
                {props.data.map((data) => {
                    return (
                        <div key={data.timestamp}>
                            <Post thumbnail={data.thumbnailUrl} image={data.imageUrl} username={data.username} />
                            <Icons increment={props.increment} index={props.index} />
                            <Likes> {props.likes} likes</Likes>
                            <CommentBox>
                                <CommentSection comments={data.comments} />
                            </CommentBox>
                            <Time>{Math.round(Math.random() + 3)} HOURS AGO</Time>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

PostContainer.propTypes = {
    data: PropTypes.array.isRequired
};

export default PostContainer;
