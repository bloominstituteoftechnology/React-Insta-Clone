import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import Post from './components/PostContainer/Post';
import Search from './components/SearchBar/Search';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      filteredData: [],
      fitlerFor: '',
    };
  };

  componentDidMount = () => {
    this.setState({dummyData: dummyData,
                  filteredData: dummyData});

  }

  inputChange = (event, index) => {
    this.setState({[event.target.name]: event.target.value})
  }

  filtered = (event) => {
    event.preventDefault();
    
    let filterData= this.state.dummyData.filter(posts => {
      let upperCase = posts.username.toUpperCase();
      if(upperCase.includes(this.state.filterFor.toUpperCase())) {
        return posts;
      }
    })
    this.setState({filteredData: filterData});
  }

  render() {
    return (
      
      <div className="App">
        <Search inputChange = {this.inputChange} filtered = {this.filtered}/>
        <div className = "content-container">
          <Post dummyData ={this.state.filteredData}/>
        </div>
      </div>
    );
  }
}

export default App;
