import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'
import data from '../../dummy-data'

class PostsPage extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            data: data
        }
    }

    render (){
        return (
            <div className="app-container">
            <SearchBar />
            <div className="posts">
              {this.state.data.map((post, index) => (
                <PostContainer key={index} data={post} />
              ))}
            </div>
          </div>
        )
    }   
}
export default PostsPage