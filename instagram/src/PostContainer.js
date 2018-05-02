import React,  {Component} from 'react';
import dummyData from '../../dummy-data.js';

class PostContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            post:[],
        }
    }
    componentDidMount() {
        this.setState({post: dummyData});
    }

    render(){
     <div></div>;   
    //return <div>{this.state.post.map(p, index) => <div>key={p + index}>{p.username p.thumbnailUrl p.imageUrl }</div>)}</div>;
    }
}
export default PostContainer;