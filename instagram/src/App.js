import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      dummyData: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.dummyData.map(data => (
          <div key={data.timestamp}>
              <PostContainer username={data.username}
                             thumbnail={data.thumbnailUrl}
                             image={data.imageUrl}
                             likes={data.likes}
                             timestamp={data.timestamp}
                             comments={data.comments} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
