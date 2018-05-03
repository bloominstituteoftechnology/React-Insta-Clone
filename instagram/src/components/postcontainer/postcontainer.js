import React, { Component } from 'react';
import "./index.css";
import CommentSection from '../commentsection/commentsection';


class PostContainer extends Component {
    render (){
        return (
            <div>
                PostContainer
                <CommentSection/>
            </div>
        );
    }
};
export default PostContainer;