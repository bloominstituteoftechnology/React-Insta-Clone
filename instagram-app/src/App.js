import React from 'react';
import dummyData from './dummy-data';
import './App.css';

class App extends React.Component{

  constructor (props){
    super(props);
    this.state = {
      comments: dummyData
    }
  }
}

export default App;
