import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import DummyData from './dummy-data';
import './App.css';
import PropTypes from 'prop-types';


class App extends Component {
  constructor(){
    super();
    this.state = {
      dummyData: [],
      filteredData: [],
      search: '',
    }
    // console.log(this.state.dummyData)
    // console.log(this.state.userNames)
  }
  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
    if(ev.target.name === 'search'){
        console.log('filterSearch');
    const filtered = this.state.dummyData.filter(post=>{
      if(post.username.includes(ev.target.value)){
        return post
      }
    });
    this.setState({filteredData: filtered});
    }
  }

  componentDidMount(){
    console.log('CDM is running');
    fetch(DummyData)
    .then(
      this.setState({
        dummyData: DummyData,
      })
      )
      .catch(err => console.log('noooo'));
  }
  filterSearch = ev => {
  
  }
  render() {
    console.log(this.state.filteredData.length)
    // console.log('Render is running');
    // console.log(this.state.dummyData)
    // console.log(this.state.userNames)
    return (
      <div className="App">
        <SearchBar handleChanges={this.handleChanges} />
        {this.state.filteredData.length > 0
        ? this.state.filteredData.map((post) =>{
          return <PostContainer 
          handleChanges={this.handleChanges}
          key={post.username}
          post={post} 
        /> })
        : this.state.dummyData.map((post) =>{
          return <PostContainer 
          handleChanges={this.handleChanges}
          key={post.username}
          post={
            this.state.filteredData.length > 0
            ? this.state.filteredData
            : post } />
        })}
      </div>
    );
  }
}

App.propTypes={
  dummyData: PropTypes.shape({
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })),
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    timeStamp: PropTypes.string,
  })
}

export default App;
