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
    current: dummyData,
  }

  focus = (username) => {
    const newData = this.state.data.filter(data => {
      return data.username === username;
    });
    console.log(newData.length);
    // checks if a username was searched that doesn't exist
    // if it doesn't, just repopulates all users
    // otherwise sets it to the correct username
    (newData.length === 0) ? this.setState({current: dummyData}) : this.setState({current: newData});
  }

  render() {
    return (
      <div className="App">
        <SearchBar focusData={this.focus}/>
        {this.state.current.map((data) => {
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
