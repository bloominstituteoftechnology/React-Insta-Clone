import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import Posts from './Posts';

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: dummyData,
      searchString: '',
    }
  }

  searchHandler = event => {
    event.preventDefault();
    if (event.target.value !== '') {
      this.setState({
        [event.target.name]:event.target.value,
      })
    }
    else {
      this.setState({
        [event.target.name]: '',
      })
    }
  }

  render() {
    return (
      <div>
        <SearchBar searchHandler={this.searchHandler}/>
        <Posts searchString={this.state.searchString} postData={this.state.postData} username={this.props.username}/>
      </div>
    );
  }
}

export default PostsPage;