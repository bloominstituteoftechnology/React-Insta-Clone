import React from 'react';
import ReactDOM from 'react-dom';
import PostPage from './PostsPage';
import CommentContainer from '../CommentSection/CommentContainer';


class PostContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {

            data: props.dummyData

        }
    }


    render(){
        return(
            <div>
                <PostPage data={this.props.data} />
                <CommentContainer data={this.props.data} />
            </div>
        )
    }
}

export default PostContainer