import React, { Component } from 'react';
import DummyData from '../../dummy-data.js';
import PostContainer from './PostContainer.js';
import SearchBar from '../SearchBar/SearchBar.js';
import styled from 'styled-components';

class PostsPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      displayData: [],
      searchValue: '',
    }
  }

  valueHandler = e => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  searchHandler = e => {
    e.preventDefault();
    console.log('searchHandler envoked')
    const searchArray = this.state.data.slice();
    const newSearchArray = searchArray.filter( post => post.username.includes(this.state.searchValue));
    this.setState({
      displayData: newSearchArray,
      searchValue: '',
    })
  }

  componentDidMount(){
    console.log("Posts Page CDM")
    this.setState({
      data: DummyData,
      displayData: DummyData,
    })
  }

  render(){

    const AppDiv = styled.div`
      ${'' /* border: 1px solid blue; */}
      background-color: snow;
      width: 100%;
      margin: 0 auto;
      height: auto;
      display: flex;
      align-items: center;
      flex-direction: column;
    `;

    const AllPostsDiv = styled.div`
        ${'' /* margin-top: 10px; */}
    `;

    return (
      <AppDiv>
        <SearchBar
          searchHandler={this.searchHandler}
          searchValue={this.state.searchValue}
          valueHandler={this.valueHandler}/>
        <AllPostsDiv>{this.state.displayData.map( (post) => {
            return <PostContainer
                    key={post.timestamp}
                    data={post}/>
            })
          }</AllPostsDiv>
      </AppDiv>
    )
  }
}

export default PostsPage;
