import React from 'react';
import PostContent from './PostContent';
// import CommentContainer from './../CommentSection/CommentContainer';
import './post.css';


class PostContainer extends React.Component {

    render () {
        return (
            <div className={"postWrap"}>
                <PostContent dummyData={this.props.dummyData}/>
            </div>
        )
    }
}


export default PostContainer;