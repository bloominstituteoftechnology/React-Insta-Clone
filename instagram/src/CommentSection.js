
import React from 'react';
import './PostContainer.css';
import Comments from './Comments'
const CommentSection = (props) => {
    return(
<div data-id={props.obj.timestamp}>
    <div className='posterID'>
    <img src={props.obj.thumbnailUrl} alt=""/>
    {props.obj.username}
    </div>

    <div>
    {props.obj.comments.map(item => <Comments key={item.text} obj={item} />)}
    </div>
</div>    )
}

export default CommentSection;