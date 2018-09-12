import React, { Component } from 'react';
import PostContainer from './PostContainer'


class PostPage  extends Component {
    constructor(props){
        super(props);
        this.state = {
            ummyDataList: [],
            inputText:''

        }
    
    }
    render() { 
        return ( 
            <React.Fragment className="App-renderer">
                <PostContainer posts={this.state.dummyDataList}/>
             </React.Fragment>
        );
    }
}
 
export default PostPage ;