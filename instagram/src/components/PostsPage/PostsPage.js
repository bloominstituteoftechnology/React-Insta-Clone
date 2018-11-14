import React from 'react';
import Posts from '../Posts/Posts';
import Header from '../Header/Header';

const PostsPage = props => {
    return (
        <div className="container">
            <Header 
            handleInputChange={props.handleInputChange}
            filter={props.filter}
            />
            <Posts 
            data={props.data}
            commentText={props.commentText}
            handleInputChange={props.handleInputChange}
            addNewComment={props.addNewComment}
            addLike={props.addLike}
            removeComment={props.removeComment}
            />  
      </div>
    );
}

export default PostsPage;