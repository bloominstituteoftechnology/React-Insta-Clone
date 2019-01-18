import React, { Component } from 'react';
// import logo from './logo.svg';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      search: '',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({data: dummyData})
    }, 2000)
  }

  handleInput = (event) => {
    event.preventDefault();
    console.log(event.target)
    this.setState({
      [event.target.value]: event.target.value,
    })
    console.log("handleInput setState: ", this.state.search)
  }

  filterUsernames = (event) => {
    event.preventDefault();
    let search = [...this.state.data];
    search = search.filter(data => {
      if(data.username === this.state.search) {
        console.log('returning data')
        return data;
      } else {
        console.log('returning nothing');
        return;
      }
    })
    this.setState({
      data: search
    })
}

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <SearchBar 
          data={this.state.data} 
          handleInput={this.handleInput}
          filterUsernames={this.filterUsernames}
          input={this.state.input}
          />
        {this.state.data.map(dataItem => (
          <PostContainer data={dataItem} key={dataItem.timestamp}/>
        ))}
        {/* <PostContainer data={this.state.data}/> */}
      </div>
    );
  }
}

export default App;
