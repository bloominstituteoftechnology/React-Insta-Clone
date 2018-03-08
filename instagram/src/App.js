import React, { Component } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar.js';
import { PostContainer } from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
    }
  }

  componentDidMount() {
    this.setState( {Data: dummyData} );
  }

    
  incrementValue = (i) => {
    const target = i.target.value;
    const newData = this.state.Data;
    newData[target].likes += 1;
    this.setState({Data: newData});
}

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.Data.map(((data, index) => <PostContainer click={this.incrementValue} data={data} i={index} key={index}/>))}
      </div>
    );
  }
}

export default App;
