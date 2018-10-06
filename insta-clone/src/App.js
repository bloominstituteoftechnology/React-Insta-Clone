import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';



class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      search: ''

    }
  }
  componentDidMount() {
     //Mounting the data after it renders.
    // setTimeout(() => {

    // }, 3000)

    this.setState({data: dummyData})
  }


  handleSearch = str => {
    const filteredPost = dummyData.filter(post => {
      return post.username.includes(str)
    })
    this.setState({data: filteredPost})

}

  render() {
    if (!this.state.data.length) {
           return <h4>Loading Post....</h4>
    }


    return (
      <>
        <div className="SearchBar">
          <SearchBar dummyData={this.state.data}
            handleSearch={this.handleSearch}
            handleInputChange={this.handleInputChange}

          />
        </div>
        <div className="PostContainer">
          <PostContainer dummyData={this.state.data} />
        </div>
     </>
    );
  }
}

export default App;
