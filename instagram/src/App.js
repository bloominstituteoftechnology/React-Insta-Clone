import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchForm from './components/SearchBar/SearchBar';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  margin-top: 50px;
`

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      searchText: ''
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData.map(item => {return {...item, display: true}})
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  clearSearch = ev => {
    ev.preventDefault();
    this.setState({
      posts: this.state.posts.map(item=> {
        return {...item, display: true};
      })
    })
  }

  searchItems = ev => {
    ev.preventDefault();
    console.log('searching...')
    this.setState({
      posts: this.state.posts.map(item => {
        if(!item.username.toUpperCase().includes(`${this.state.searchText.toUpperCase()}`)){
          return{...item, display: false}
        }
        else{
          return {...item, display: true};
        }
      })
    });
  };

  render() {
    return (
      <AppContainer className="App">
        <SearchForm searchText={this.state.searchText}
        handleChange={this.handleChange}
        searchItems={this.searchItems}
        clearSearch={this.clearSearch}
        />

      {this.state.posts.map( (item,index) => {
         return <PostContainer thisPost={item} key={index} index={index} />
      })}

      </AppContainer>
    );
  }
}

export default App;
