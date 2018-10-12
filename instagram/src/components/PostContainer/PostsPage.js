import React, {Component} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends Component{
    constructor(props){
        super(props);
        this.state={
            searchValue:''
        }
    }

    searchInputHandler=(event)=>{
        this.setState({
            searchValue:event.target.value
        });
        console.log(this.state.searchValue)
    }

    render(){
        return(
            <div className="App">
                <SearchBar searchInputHandler={this.searchInputHandler} searchValue={this.state.searchValue} />
                {this.props.dummyData.map(item => {
                return(
                    <PostContainer key={item.timestamp} post={item} comments={item.comments}  /> 
                )}) 
                }
            </div>
        )
    
    }
}

export default PostsPage