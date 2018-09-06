import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBarContainer from '../../components/SearchBar/SearchBarContainer';
import Posts from '../../components/PostContainer/Posts';

// Index page of Posts
class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      dummydata: [],
      filteredState: [],
      filtered: false
    };
  }

  // Set the dummyData when the component mounts
  componentDidMount() {
    this.setState({dummydata: dummyData});
    this.setState({filteredState: dummyData})
  };

  // Filter out the results based on the user's input
  handleSearch = (e) => {
    // If the string is empty, don't filter
    if (e === '') {this.setState({filtered: false})}
    let updatedList = this.state.dummydata;

    updatedList = updatedList.filter(function(item) {
      return item.username.toLowerCase().search(
        e.toLowerCase()
      ) !== -1;
    });

    this.setState({filteredState: updatedList, filtered: true});
  }

  render() {
    return (
      <div>
        <SearchBarContainer hdlSearch={this.handleSearch} forceUpd={this.props.forceUpd} />
        <div className="content">
          <Posts data={this.state.filtered ? this.state.filteredState : this.state.dummydata} username={this.props.username} />
        </div>
        
      </div>
    );
  }
}

export default PostsPage;