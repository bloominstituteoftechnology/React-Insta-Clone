import React, { Component } from 'react';
import dummy_data from './dummy-data';
import uuidv4 from 'uuid/v4';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from  './components/PostContainer/PostContainer';

import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log('App - constructor()');
    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    console.log('App - componentDidMount()');
    this.setState({
      dummyData: dummy_data
    })
  }

  filterSearch = (term) => {
    this.setState({
      dummyData: dummy_data.filter(post => post.username.includes(term))
    })
  }

  componentDidUpdate(prevProps, prevState){
    console.log('Filter', this.state.dummyData.filter(post => post.username.includes('philz')));
    console.log('App - componentDidUpdate()', prevProps, prevState);
  }

  render() {
    console.log('App - render()');
    const {dummyData} = this.state;
    console.log(dummyData);
    return (
      <div className="App">
        <SearchBar filterSearch={this.filterSearch} />
        {
          dummyData.map(post => {
            return (
              <PostContainer key={uuidv4()} postData={post} />
            )
          })
        }
      </div>
    );
  }
}

export default App;
