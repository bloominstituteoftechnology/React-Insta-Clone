import React, { Component } from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'
import Logout from '../Login/Logout'


class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      filter: ""
    }
  }

  componentDidMount(){
    this.setState(
      {entries: dummyData}
    )
    console.log(dummyData);
  }

  updateFilter = e => {
    this.setState({
      filter: e.target.value
    })
  }

  filterEntries = e => {
    e.preventDefault();
    let new_entries = dummyData.filter(entry => JSON.stringify(entry).includes(this.state.filter))
    this.setState({
      entries: new_entries,
      filter: ""
    })
  }

  render() {
    // dummyData.forEach(item =>
    // console.log(item))
    // dummyData.forEach(item =>
    // console.log(typeof item))
    // console.log(this.state.entries);
    return (
      <div className="posts-page">
        <Logout />
        <SearchBar
          value={this.state.filter}
          updateFilter={this.updateFilter}
          filterEntries={this.filterEntries}
        />
          {this.state.entries.map(entry =>
          <PostContainer entry={entry} key={entry.timestamp}/>
        )}

      </div>


    );
  }
}

// PostsPage.propTypes = {
//   entry: PropTypes.shape({
//     comments: PropTypes.array.isRequired,
//     imageUrl: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//     thumbnailUrl: PropTypes.string.isRequired,
//     timestamp: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired,
//   }).isRequired
// }

export default PostsPage;
