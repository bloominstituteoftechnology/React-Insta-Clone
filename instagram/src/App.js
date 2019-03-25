import React, {Component} from 'react';
import './App.css';

import dummyData from './dummy-data';
import Header from './components/Header';
import PostContainer from './components/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData,
      search: '',
      newComments: ''
    };
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Header onChange={this.onInputChange} />
        {this.state.dummyData.map(data => {
          return (
            <PostContainer
              key={data.id}
              id={data.id}
              img={data.imageUrl}
              username={data.username}
              date={data.timestamp}
              likes={data.likes}
              comments={data.comments}
              thumbnail={data.thumbnailUrl}
              onChange={this.onInputChange}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
