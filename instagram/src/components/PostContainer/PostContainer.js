import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Post = styled.div`
  border: 1px solid rgba(0,0,0,0.2);
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`
const ProfilePic = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 30px;
  width: 30px;
  position: relative;
  margin: 2%;
`
const UserName = styled.div`
  font-weight: bold;
`

const PostContainer = props => {
    return (  
      <div className="post-container">{props.data.map((d,i) => (
        <Post key={i}>
          <UserInfo>
            <ProfilePic>
              <img src={d.thumbnailUrl} alt="" />
            </ProfilePic>
            <UserName>{d.username}</UserName>
          </UserInfo>
          <div className="user-post">
            <img src={d.imageUrl} alt="" />
          </div>
          <div className="user-comments">
            <CommentSection comments={d.comments} likes={d.likes} timestamp={d.timestamp}/>
          </div>
        </Post>
  ))}
      </div>
  )
}

PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.object),
  likes: PropTypes.number,
  timestamp: PropTypes.string
}

export default PostContainer;