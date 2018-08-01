import React, { Component } from 'react';
import dummyData from '../../instagram/src/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataHolder: null,
      Empty: true,
      filteredSearch: '',
    };
  }

  onSearch = e => {
    e.preventDefault();
    e.target.reset();
    this.setState({
      data: this.state.data, 
      dataHolder: null,
      Empty: true,
    });
  };

  componentDidMount() {
    this.setState({
      data: dummyData,
    });
  };

  render() {
    let data = (this.state.dataHolder ? this.state.dataHolder : this.state.data)
    return (
      <div className='App'>
        <SearchBar 
          onSearch={this.onSearch}
          />
          <PostsPage data={data}/>
        </div>
    );
  }
}

export default App;
