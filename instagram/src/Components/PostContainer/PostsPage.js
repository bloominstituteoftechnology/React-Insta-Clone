import React, { Component } from 'react';
import dummyData from './dummy-data'
import PostContainer from './Components/PostContainer/PostContainer'
import SearchBar from './Components/SearchBar/SearchBar'

class PostsPage extends Component {
    constructor() {
        super()
        this.state = {
            dummyData: [],
            postResults: []
        }
    }

    componentDidMount() {
        this.setState({ dummyData: dummyData })
    }

    searchPosts = event => {
        const postResults = this.state.dummyData.filter(item => {
            if (item.username.includes(event.target.value)) {
                return item
            }
        })
        this.setState({ postResults: postResults })
    }

    render() {
        return (
            <div className="App">
                <SearchBar
                    searchPosts={this.searchPosts}
                />
                <PostContainer
                    dummyData={
                        this.state.postResults.length > 0
                            ? this.state.postResults
                            :this.state.dummyData
                    }
                />
            </div>
        )
    }
}

export default PostsPage