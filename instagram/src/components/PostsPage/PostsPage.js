import React from 'react';
import Posts from '../Posts/Posts';
import Header from '../Header/Header';
// import '../../App.css';

const PostsPage = props => {
    return (
        <div className="container">
            <Header 
            handleInputChange={props.handleInputChange}
            filter={props.filter}
            logOut={props.logOut}
            />
            <Posts 
            data={props.data}
            commentText={props.commentText}
            handleInputChange={props.handleInputChange}
            addNewComment={props.addNewComment}
            addLike={props.addLike}
            removeComment={props.removeComment}
            handleInputChangeComment={props.handleInputChangeComment}
            />  
      </div>
    );
}

export default PostsPage;