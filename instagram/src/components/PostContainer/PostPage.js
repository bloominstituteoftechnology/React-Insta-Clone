import React from "react";
import dummyData from "../../dummy-data";

import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';



class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        searchInput: ''
    }
  }
  
  componentDidMount() {
    this.setState({data: dummyData})
  }

  addNewComment = (inputComment, postIndex) => {
    const nextData = [...this.state.data];
    nextData[postIndex].comments.push(inputComment);
    this.setState({data: nextData});
  }

  clickHeart = (interactIndex) => {
    const newData = [...this.state.data];
    const updateData = newData.map((data, index) => {
      if(index === interactIndex) {
        data.likes += 1;
      }
      return data;
    })
    this.setState({data: updateData});
  }

  search = (e) => {
    this.setState({ searchInput: e.target.value })
  }


  render() {
    return(
      <div>
        <SearchBar posts={this.state.data}
        search={this.search}
        />
        <PostContainer
          posts={this.state.data} 
          addNewComment={this.addNewComment} 
          clickHeart={this.clickHeart}
          searchTerm={this.state.searchInput}
        />
      </div>
    )
  }
}

export default PostPage;