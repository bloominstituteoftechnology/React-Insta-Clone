import React from 'react';
import dummyData from './dummy-data.js';
import Search from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            input: []
        }
    }
    search = e => {
        this.setState({input: e.target.value});
      }
    filter = (e) => {
        e.preventDefault();
        let result = this.state.input; 
        let filtered = this.state.data.filter(data => data.username.includes(result));
        this.setState({data: filtered});
    }
    componentDidMount(){
        this.setState({data:dummyData});
      }
    render(){
        return(
            <div>
                <Search searchUser={this.search} result={this.filter} />
                <PostContainer post={this.state.data}/>
            </div>
        )
    }
}

export default PostPage;