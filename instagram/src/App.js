import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: dummyData
    }
  }



  render() {
      const dataSet = this.state.data;
    return (
      <div className="App">
        {dataSet.map(obj => <PostContainer key={obj.id} obj={obj} />)}

      </div>
    );
  }
}

export default App;
