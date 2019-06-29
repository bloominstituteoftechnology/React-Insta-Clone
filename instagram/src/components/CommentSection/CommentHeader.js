import React from 'react';
import {CommentIcons, Likes, Icon} from '../Styles/Styles';
import './CommentSection.css';

const CommentHeader = props => {
    return (
        <div>
        <CommentIcons>
            <div className='left-comments'>
                <Icon type='love' onClick={props.addLike} />
                <Icon type='bubble' />
                <Icon type='upload' />
            </div>
            <div>
                <Icon type='save' />
            </div>
        </CommentIcons>

        <Likes>
        {props.likes} likes
        </Likes>

        </div>
    )
}

export default CommentHeader;


