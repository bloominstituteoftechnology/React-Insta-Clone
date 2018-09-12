import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dummyDataList: [],
      inputText:''
    }
  }


    componentDidMount() {
      this.setState({ dummyDataList: dummyData })
    }

    search = (term) => {
      let dummyDataList = dummyData.filter(post  => post.username.includes(term))
      this.setState({ dummyDataList })
    }


  render() {
    return (
      <div className="App">
        <header className="search-bar">
          <SearchBar search={this.search}/>
        </header>

        <React.Fragment className="post-container">
          <PostContainer posts={this.state.dummyDataList}/>
        </React.Fragment>
      
      </div>
    );
  }
}

export default App;
