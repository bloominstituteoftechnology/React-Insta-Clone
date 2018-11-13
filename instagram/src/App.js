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

  searchData = () => {
    if (this.state.searchText === '') {
      return this.state.data;
    } else {
      return this.state.data.filter(post => {
        return post.username.toLowerCase().includes(this.state.searchText.toLowerCase());
      })
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
            searchData={this.searchData}
          />
        </header>
        <PostContainer 
          data={this.searchData()}
          searchText={this.state.searchText}
          handlesChanges={this.handlesChanges} 
        />
      </div>
    );
  }
}


export default App;
