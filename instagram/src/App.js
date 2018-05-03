import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
      data: [],
    };
    this.updateChar = this.updateChar.bind(this);
  }

  componentDidMount = () => {
    this.setState({ data: dummyData });
  }

  updateChar = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        { this.state.data.map((post, i) => {
          return <PostContainer 
            key={i} 
            data={post} 
            state={this.state}
            update={this.updateChar}  
          />
        }) }
      </div>
    );
  }
    // return <h1>Test</h1>;
}

export default App;
