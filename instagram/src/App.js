import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';



class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }; 
  }

  componentDidMount(){
  	this.setState({dummyData});
  }

  render() {
    return (
      <div className="App">
     		<SearchBar />
        <div className="data">
          {this.state.data.map(data => 
            <PostContainer data={data} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
