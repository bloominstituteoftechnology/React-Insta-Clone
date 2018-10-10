import React from 'react';
import PostContainer from './PostContainer';
import Header from './../SearchBar/Header';
import './post.css';

const PostsPage = (props) => {
    return (
        <>
        <Header changeSearchTerm={props.changeSearchTerm} />
        {props.data.map(data => {
          return (
            <PostContainer 
            likeClickHandler={props.likeClickHandler}
            username={data.username} 
            thumbnailUrl={data.thumbnailUrl}
            imageUrl={data.imageUrl}
            likes={data.likes}
            comments={data.comments}
            timestamp={data.timestamp}
            clickHandler={props.likeClickHandler}
            commentTextOnChange={props.commentTextOnChange}
            addCommentClickHandler={props.addCommentClickHandler}
            commentText={props.commentText}
            searchTerm={props.searchTerm}
            />
          )})
        }
        </>
    )
}

export default PostsPage;