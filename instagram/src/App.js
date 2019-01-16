import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from '../src/components/SearchBar/SearchBar';
import PostContainer from '../src/components/PostContainer/PostContainer';
import propTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({
      dummyData: dummyData
    })
    console.log(dummyData);
  }

  searchFilter = e => {
    e.preventDefault();
    this.setState({
      dummyData: this.state.dummyData.filter(item => {
        if (item.username === this.state.searchterm) {
          return item;
        }
      })
    })
  }


  changeHandler = (e) => {
    this.setState({
        searchterm: e.target.value
    })
    this.setState({dummyData: dummyData});
  };

  render() {
    return (
      <div className='App'>
        <SearchBar 
          filter={this.searchFilter}
          changer={this.changeHandler}
        
        />
        {this.state.dummyData.length === 0 ? <h3>No Matches. Try entering a valid username</h3> : 
        this.state.dummyData.map(item => {return <PostContainer data={item}/>})}
      </div>
    )
  }

}

App.propTypes = {
  dummyData: propTypes.array,
}

export default App;
