import React from 'react';
import PostHeader from './PostHeader';
import './post.css';


class PostContainer extends React.Component {

    render () {
        return (
            <div className={"postWrap"}>
                
                <PostHeader dummyData={this.props.dummyData}/>
                
            </div>
        )
    }



}


export default PostContainer;