import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar.js';
import PostContainer from './PostContainer.js'
import {WrapperDiv} from '../Styles'

class PostsPage extends Component {
  constructor (props){
    super(props);
    this.state = {
      dummyData: [],
      search: '',
    }
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData});
  }

  handleSearch = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    let data = this.state.dummyData.filter(data => data.username.indexOf(this.state.search) !== -1)
    return (
      <WrapperDiv>
        <SearchBar input={this.state.search} handleSearch={this.handleSearch}/>
        {data.map((data,i) => <PostContainer key={i} data={data} comment={this.state.comment} username={this.props.username}/>)}
      </WrapperDiv>
    );
  }
}

export default PostsPage;
