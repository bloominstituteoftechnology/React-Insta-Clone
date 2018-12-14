import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  searchPosts = (event) => {
      const term = event.target.value;

      if(term === '') {
        this.setState({data: dummyData});
      }

      const newList = this.state.data.filter(post => post.username === term);

      if(newList.length === 0) {
        return;
      }

      this.setState({
        data: newList})
    }


    componentDidMount() {
      setTimeout(() => {
        this.setState({
          data: dummyData})
      }, 1500)
    }

    render() {

    return (
      <div className="App">
        <SearchBar data={this.state.data} searchHandler={this.searchPosts} />
        { this.state.data.length === 0 ? <h1 className="load">LOADING...</h1>
          : this.state.data.map(obj => <PostContainer key={Math.random()}
                                                            user={obj.username}
                                                            thumbnail={obj.thumbnailUrl}
                                                            image={obj.imageUrl}
                                                            time={obj.timestamp}
                                                            likes={obj.likes}
                                                            comments={obj.comments}/>)}
      </div>
    );
  }
}

export default App;
