import React from 'react';
import ReactDOM from 'react-dom';
import PostContainer from './PostContainer';
import dummyData from './../../dummy-data';

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  insta_posts:[] }
    }
    componentDidMount(){
        console.log(dummyData);

    }
    render() { 
        return (  
     <PostContainer posts={this.state.insta_posts}/>
        
        );
    }
}
 
export default PostsPage;