import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import InstaComment from "../../img/insta_comment.png";
import InstaLike from "../../img/insta_strokeHeart.png";

import { PostWrapper } from '../Styles/Styles';
import { LikeSection } from '../Styles/Styles';
import { LikeCommentIcons } from '../Styles/Styles';
import { LikeCount } from '../Styles/Styles';
import { PostImage } from '../Styles/Styles';


const Post = props => {
    return <PostWrapper>
        <header>
          <img src={props.postdata.thumbnailUrl} alt="" />
          <p>{props.postdata.username}</p>
        </header>
        <PostImage>
          <img src={props.postdata.imageUrl} alt="" />
        </PostImage>
        <LikeSection>
          <LikeCommentIcons>
            <img onClick={(event) => props.addLike(event, props.postIndex)} className="instaLike" src={InstaLike} alt='' />
            <img src={InstaComment} alt='' />
          </LikeCommentIcons>
          <LikeCount>{props.postdata.likes} likes</LikeCount>
        </LikeSection>
        <CommentSection
          {...props}
          {...props.postdata}
        />
      </PostWrapper>;
}

Post.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })),
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
}

export default Post;