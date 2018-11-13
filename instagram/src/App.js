import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import Navigation from './components/Navigation';
import PostContainer from './PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: '',
    }
  }

  handlesChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidMount() {
    this.setState ({
      data: dummyData,
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation 
            handlesChanges={this.handlesChanges} 
            searchText={this.state.searchText}
          />
        </header>
        <PostContainer 
          data={this.state.data}
          searchText={this.state.searchText}
          handlesChanges={this.handlesChanges} 
        />
      </div>
    );
  }
}


export default App;
