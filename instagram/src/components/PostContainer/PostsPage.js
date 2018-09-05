import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBarContainer from '../../components/SearchBar/SearchBarContainer';
import Posts from '../../components/PostContainer/Posts';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      dummydata: [],
      filteredState: []
    };
  }

  // Set the dummyData when the component mounts
  componentDidMount() {
    this.setState({dummydata: dummyData});
    this.setState({filteredState: dummyData})
  };

  handleSearch = (e) => {
    let updatedList = this.state.dummydata;

    updatedList = updatedList.filter(function(item) {
      return item.username.toLowerCase().search(
        e.toLowerCase()
      ) !== -1;
    });
    this.setState({filteredState: updatedList});
  }

  render() {
    return (
      <div className="App">
        <SearchBarContainer hdlSearch={this.handleSearch} forceUpd={this.props.forceUpd} />
        <div className="content">
          <Posts data={this.state.dummydata} />
        </div>
        
      </div>
    );
  }
}

export default PostsPage;