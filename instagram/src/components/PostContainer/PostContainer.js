import React from "react";
import PostContent from "../PostContent/PostContent";
import styled from 'styled-components';
// import "./PostContainer.css";
import PropTypes from 'prop-types';


const Container = styled.div`
  margin: 0 auto;
  margin-top: 10rem;
  width: 100rem;
`;

const PostContainer = props => {

  return (
    <Container>
      {props.data.map(item => {
        return <PostContent 
        key={item.username} 
        data={item}
        comments={item.comments}
        likes={item.likes}   
        />;
      })}
    </Container>
  );
};

PostContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      thumbnailUrl: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      comments: PropTypes.array.isRequired,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })).isRequired
  }))
};



export default PostContainer;

    {/* <div className="post-container">
      {props.data.map(item => {
        return <PostContent 
        key={item.username} 
        data={item}
        comments={item.comments}
        likes={item.likes}   
        />;
      })}
    </div> */}