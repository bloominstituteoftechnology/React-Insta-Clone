import React from 'react';
// import './PostContainer.css';
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
const ProfilePicCon = styled.div`
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
const ProfilePic = styled.img`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  max-width: 30px;
`

const UserPost = styled.div`

`

const UserComments = styled.div`

`



const PostContainer = props => {
    return (  
      <>{props.data.map((d,i) => (
        <Post key={i}>
          <UserInfo>
            <ProfilePicCon>
              <ProfilePic src={d.thumbnailUrl} alt="" />
            </ProfilePicCon>
            <UserName>{d.username}</UserName>
          </UserInfo>
          <UserPost>
            <img src={d.imageUrl} alt="" />
          </UserPost>
          <UserComments>
            <CommentSection comments={d.comments} likes={d.likes} timestamp={d.timestamp}/>
          </UserComments>
        </Post>
  ))}
      </>
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