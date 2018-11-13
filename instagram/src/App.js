import React, { Component } from 'react';

import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';
import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      filter: '',
      comment: ''
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getData () {
    if (this.state.filter === '')
      return this.state.data;
    return this.state.data.filter(post => {
      return JSON.stringify(post).toLowerCase().includes(this.state.filter.toLowerCase());
    })
  }

  render() {
    return (
      <div className="container">
        <Header 
          handleInputChange={this.handleInputChange}
          filter={this.state.filter}
        />
        <Posts 
            data={this.getData()}
        />  
      </div>
    );
  }
}

export default App;
