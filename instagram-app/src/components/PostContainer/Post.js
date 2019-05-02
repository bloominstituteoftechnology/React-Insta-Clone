import React from 'react'; 
import CommentSection from '../CommentSection/CommentSection'; 
import Likes from './Likes'; 
import PropTypes from 'prop-types';
import styled from 'styled-components'; 


const PostWrapper = styled.div`
  width: 90%;
  margin: 0 auto; 
  margin-bottom: 5%; 
`;

const PostHeader = styled.div`
    display: flex; 
    flex-direction: row; 
    width: 89.5%; 
    margin: 0 auto; 
    align-items: center; 
    border-top: 1px solid grey;
    border-right: 1px solid grey;
    border-left: 1px solid grey;
`; 

const Thumbnail = styled.img`
    width: 5%; 
    height: 5%; 
    border-radius: 100%; 
    margin-right: 2%;  
    margin-left: 2%; 
`;

const PostUsername = styled.p`
    font-size: 1.5rem; 
    font-family: 'Pacifico', cursive;
`;

const PostImage = styled.img`
    width: 645px; 
    height: 645px; 
    border: 1px solid grey; 
    margin: 0; 
`; 

class Post extends React.Component {

 constructor(props) {
   super(props); 
   this.state = {
     likes: props.post.likes, 
   }
  } 

   addLike = () => {
     let likes = this.state.likes + 1; 
     this.setState({ likes }); 
   }

    render (){
    return(
        <PostWrapper>
  
          <PostHeader>
                <Thumbnail src={this.props.post.thumbnailUrl}/>

                <PostUsername>{this.props.post.username}</PostUsername>
          </PostHeader>

          <PostImage src= {this.props.post.imageUrl} />

          <Likes addLike={this.addLike} likes={this.state.likes} /> 

          <div className="comments">
            <CommentSection comments={this.props.post.comments} commentName={this.state.commentName}/>
          </div>

        </PostWrapper>
    );
    }
}; 

Post.propTypes = {
    post: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number,
        timestamp: PropTypes.string, 
        comments: PropTypes.arrayOf(
            PropTypes.shape({
              username: PropTypes.string.isRequired,
              text: PropTypes.string.isRequired
            })
          ).isRequired
      })
    ).isRequired
  };
  
  // Just in case we haven't gotten data back, going to do a default prop array
  Post.defaultProps = {
    post: []
  };

export default Post; 