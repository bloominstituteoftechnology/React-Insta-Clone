import React from 'react';

export const PostContainer = props => {
     click(e) {
        event.target.classList.toggle('PostContainer__icons-liked')
        props.click(e.target.value);
    }

    commentSubmit(e) {
        e.preventDefault();
        props.comment(e);
        e.target.firstChild.value = "";
    }
    
    return (
        <div className="PostContainer">
            <div className="PostContainer__main">
                <div className="PostContainer__header"><img className="PostContainer__thumbnail" src={props.data.thumbnailUrl} alt=""></img> { props.data.username } </div>
                <img className="PostContainer__image" src={props.data.imageUrl}alt=""></img>
                <div className="PostContainer__icons"><button className="PostContainer__icons-icon" value={props.i} onClick={click}><i class="far fa-heart fa-2x"></i></button><button className="PostContainer__icons-icon"><i class="fa fa-comment fa-2x"></i></button></div>
                <div className="PostContainer__comment-content">{props.data.likes} Likes </div>
                {/* <CommentSection comments={props.data.comment} /> */}
                <form onSubmit={commentSubmit} id={props.i}>
                <input className="PostContainer__input" placeholder="leave a comment..."></input><span>...</span>
                </form>
            </div>
        </div>
    )
}