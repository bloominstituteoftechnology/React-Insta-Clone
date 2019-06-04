import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.data.map(post => {
          return <PostContainer post={post} key={post.id} />;
        })}
      </div>
    );
  }
}

export default App;
