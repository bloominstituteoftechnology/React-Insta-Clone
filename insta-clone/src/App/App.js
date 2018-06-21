import React from 'react';
import './App.css';
import dummyData from '../dummy-data.js'
import Posts from '../post-components/posts.js'
import SearchBar from '../searchBar'
import {
  AppWrapper
} from '../styles/reusables.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      search: ""
    }
  }

  searchEvent = e => {
    this.setState({search: e.target.value})
  }

  render() {
    return (
      <AppWrapper>
        <section>
          <SearchBar searchHandler={this.searchEvent}/>
        </section>
        <div className="posts">
          <Posts data={this.state.data} search={this.state.search} />
        </div>
      </AppWrapper>
    );
  }
}

export default App;
