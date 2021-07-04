import React from 'react';
import './PostContainer.css';
import { PostHeaderStyle, Thumbnail, ThumbnailUsername} from '../../Styles';

const PostHeader = (props) => { 
    return(
        <PostHeaderStyle>
            <Thumbnail
                alt="thumnail"
                src={props.thumbnail}
            />
            <ThumbnailUsername>{props.username}</ThumbnailUsername>
        </PostHeaderStyle>
    );
}

export default PostHeader;