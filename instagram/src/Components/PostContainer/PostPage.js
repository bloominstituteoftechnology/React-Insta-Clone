import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';
import 'font-awesome/css/font-awesome.min.css';

import '../../App.css';

class PostPage extends React.Component {
    constructor () {
    super (); 
    this.state = {
        data: [],
        searchValue: ''
    }
    }

    componentDidMount(){
    this.setState(state => ({
        data: dummyData,
    }))
    }

    filterHandler = e =>  {
    let filterData = dummyData.filter((data)  => data.username.includes(e))
    this.setState((state)   =>  ({
        data: filterData,
        searchValue: e,
    }))
}



    render() {
    return (
        <div className="main-container">
        <SearchBar filter={this.filterHandler}/>
        {this.state.data.map(post => {
            return <PostContainer 
                userImg={post.thumbnailUrl}
                username={post.username}
                postImg={post.imageUrl}
                likes={post.likes} 
                comments={post.comments}
                timestamp={post.timestamp}
            />
        })} 
        </div>
    );
}
}

export default PostPage;
