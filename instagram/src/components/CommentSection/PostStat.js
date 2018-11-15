import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPostStat = styled.div`
  width: 100%;
  padding: 1.2rem 0;
  font-weight: bold;
`;

const StyledStatIcons = styled.div`
  font-size: 2.4rem;

  i {
    margin-right: 1rem;
    transition: all 1s;
  }
`;

const PostStat = props => {
  return (
    <StyledPostStat className="post--stat">
      <StyledStatIcons className="stat-icons">
        <i
          className={
            `${props.liked ? "fas" : "far"} fa-heart`
          }
          onClick={() => props.toggleLike()}
          style={{
            color: props.liked ? 'red':'black'
          }}
        ></i>
        <i className="far fa-comment fa-flip-horizontal"></i>
      </StyledStatIcons>
      {props.likes > 1 ? `${props.likes} likes` : `${props.likes} like`}
    </StyledPostStat>
  );
}

PostStat.propTypes = {
  likes: PropTypes.number.isRequired,
  toggleLike: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
}

export default PostStat;