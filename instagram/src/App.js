import React, { Component } from 'react';
import SearchBar from '../src/Components/SearchBar';



class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyObj: []
    };
  }


  render() {
    return(
      <div className='app-wrap'>
        <SearchBar />
      </div>
      
      
    );
  }
}

export default App;
