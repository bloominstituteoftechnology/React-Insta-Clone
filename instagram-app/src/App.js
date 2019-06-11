import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';



class App extends React.Component {
  state = {
    data: []
  };
  

      componentDidMount() {
     this.setState({ data: dummyData })
    }
    render() {

      return (
        <div className="App">

          <SearchBar />
          <PostContainer data={this.state.data} />
      
        </div>
      );
    }
  }



export default App;
