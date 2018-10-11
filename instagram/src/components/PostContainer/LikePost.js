import React from 'react';
import './PostContainer.css'
import {LikeSection, Likes} from '../../Styles';

const LikePost = (props) => {
    return [
        <LikeSection key="likes-icons" onClick={props.increment}> 
            <div>
                <i class="far fa-heart fa-2x"></i>
                <i class="far fa-comment fa-2x"></i>
            </div>
        </LikeSection>,
        <div key="likes-container">
            <Likes>{props.likes}</Likes>
        </div>
    ]
}

export default LikePost;