import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state= {
      dummyData: [],
      dummy: ""
    }
  }

  componentDidMount() {
    this.setState({dummyData: dummyData})
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="left-Nav">
            <i className="fab fa-instagram" style={{ fontSize: '50px' }}></i>
            <h1>Instagram</h1>
          </div>
          <SearchBar />
          <div className="right-Nav">
            <i className="far fa-compass" style={{ fontSize: '35px' }}></i>
            <i className="far fa-heart" style={{ fontSize: '35px' }}></i>
            <i className="far fa-user" style={{ fontSize: '35px' }}></i>  
          </div>          
        </header>
        <div className="container">
          <PostContainer 
          datas={this.state.dummyData} 

          />
        </div>
      </div>
    );
  }
}

export default App;
