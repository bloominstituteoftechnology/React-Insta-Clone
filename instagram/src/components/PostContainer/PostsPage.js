import React from 'react';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  insta_posts:[] }
    }
    componentDidMount(){
        console.log(dummyData);

    }
    render() { 
        console.log('data', dummyData);
        console.log('state', this.state);
        return (  
     <PostContainer posts={this.state.insta_posts}/>
        
        );
    }
}
 
export default PostsPage;