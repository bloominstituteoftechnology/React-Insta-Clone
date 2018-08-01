import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBarComponent/search-bar';
import CardContainer from './components/PostComponent/CardContainer';
import PostPage from './components/PostsPage';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      search: '',
      cloneData: []
    };
  }

  componentDidMount(){
    this.setState({
      data: dummyData,
      cloneData: dummyData
    })
  }

  onInputChange (event, prevState){
    this.setState({search: event.target.value})
  }

  search (event, prevState){
    event.preventDefault();
    const userName = this.state.search
    const data = this.state.data.slice()
    const newData = data.filter(cell => cell.username.includes(userName))
    console.log(newData)
    this.setState({data: newData})
  }

  render() {
    return (
      <PostPage data={this.state.data} inputChange={this.onInputChange.bind(this)} onClick={this.search.bind(this)}/>
    )
  }
}

export default App;
