import React from 'react';
import CommentSection from "./../../components/CommentSection/CommentSection";
import {ThePostContainer, 
  NameContainer,
  PosterName} from '../Reusables/Reusables';
import '../../images.css'

const PostContainer = props => {

    return (

        <ThePostContainer> 
          <NameContainer>  
            <img className="ThumbnailImg"
          src={props.post.thumbnailUrl}
          alt="thumbnail"
        />
        <PosterName>{props.post.username}</PosterName>
      </NameContainer>
      <img className="Img"
        src={props.post.imageUrl}
        alt=""
      />

            <CommentSection 
        postId={props.post.imageUrl}
        comments={props.post.comments}
 />
            
        </ThePostContainer>

    );

  }

export default PostContainer;