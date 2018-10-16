import React from 'react';
import PostContent from './PostContent';
import './post.css';


class PostContainer extends React.Component {

    componentDidMount() {
        
        console.log(this.props.subComment)
    }

    render () {
        return (
            <div className={"postWrap"}>
                <PostContent
                subComment={this.props.subComment}
                commentHandler={this.props.commentHandler}
                dummyData={this.props.dummyData}/>
            </div>
        )
    }
}


export default PostContainer;  