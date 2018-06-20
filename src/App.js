import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comment: ""
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div className="App">
          {this.state.data.map((post,i) => (
            <PostContainer
              key={i}
              postComments={post.comments}
              postStarter={post.username}
              postThumb={post.thumbnailUrl}
              postImage={post.imageUrl}
            />
          ))}
          
        </div>
      </div>
    );
  }
}

export default App;
