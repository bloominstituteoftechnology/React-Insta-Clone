import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer';
import dummyData from './dummy-data';

//The root App component of your application should iterate over said data, 
//passing each individual object as a prop to an instance of PostContainer.

class App extends Component {
  state= {
    data: dummyData,
  }

  render() {
    return (
      <div className="App">
        <SearchBar dummy={this.state.data}/>
        {this.state.data.map((data) => {
            return <PostContainer 
            key={data.id} 
            data={data}
            />;
			  })}
      </div>
    );
  }
}

export default App;
