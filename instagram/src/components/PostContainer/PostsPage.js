import React, {Component} from "react";
import SearchBar from '../SearchBar/SearchBar.js';
import PostContainer from './PostContainer.js';
import dummyData from '../../dummy-data.js';

class PostsPage extends Component  {
    state   =   {
        data: [],
        searchValue: ""
    };
    componentDidMount() {
        this.setState((state)   =>  ({
            data: dummyData,
        }))
    }

    searchFilter    =   (value)  =>  {
        let filtered = dummyData.filter((data)  =>  {
            return data.username.includes(value);
        })
        this.setState((state)   =>  ({
            data: filtered,
            searchValue: value,
        }))
    }
    render()    {
        return(
            <div>
                <SearchBar filter={this.searchFilter}/>
                {this.state.data.map((obj, index)   =>  {
                    return  <PostContainer timestamp={obj.timestamp} thumbnail={obj.thumbnailUrl} image={obj.imageUrl} username={obj.username} likes={obj.likes} comments={obj.comments} key={index}/>
                })}
            </div>
        )
    }
}

export default PostsPage;
