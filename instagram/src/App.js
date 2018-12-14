import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      prevData: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({data: dummyData})
    }, 1500)
  }


    render() {

    return (
      <div className="App">
        <SearchBar data={this.state.data} />
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
