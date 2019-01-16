import React, { Component } from 'react';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import DummyData from '../../dummy-data';
import '../../App.css';
import PropTypes from 'prop-types';



class PostPage extends Component {
  constructor(){
    super();
    this.state = {
      dummyData: [],
      filteredData: [],
      search: '',
      storage: '',
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
        localStorage.setItem('search', post)
        return post
      }
    });
    this.setState({filteredData: filtered});
    console.log(localStorage.search);
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
    return (
      <div className="App">
        <SearchBar 
        handleChanges={this.handleChanges}
        logout={this.props.logout}
        username={this.props.username}
        />

        {this.state.filteredData.length > 0
        ? this.state.filteredData.map((post) =>{
          return <PostContainer 
          username={this.props.username}
          handleChanges={this.handleChanges}
          key={post.username}
          post={post} 
        /> })
        : this.state.dummyData.map((post) =>{
          return <PostContainer 
          username={this.props.username}
          handleChanges={this.handleChanges}
          key={post.username}
          post={post } />
        })}
      </div>
    );
  }
}


export default PostPage;
