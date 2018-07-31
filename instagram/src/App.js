import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: []
    };

    this.likeIncrement = this.likeIncrement.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }

  likeIncrement(index) {
    this.setState(function(prevState, props){
      return {[this.state.data[index].likes]: [prevState.data[index].likes++]}
    });
    this.setState(function(prevState, props){
      return {[this.state.data[index].liked]: true}
    });
    console.log([this.state.data[index].liked]);
  }

  filterData(event) {
    if(event.target.value === '') {
      this.setState({data: dummyData})
    } else {
      this.setState({filteredData: this.state.data.filter(item => item.username.includes(event.target.value))})
      this.setState(function(prevState, props){
        return {data: prevState.filteredData}
      })
    }
    
  }

  render() {
    return (
      <div className="App">
        <SearchBar filter={this.filterData} />
        {this.state.data.map((item, index) => <PostContainer post={item} key={item.timestamp} index={index} like={this.likeIncrement} liked={item.liked} />)}
      </div>
    );
  }
}

export default App;
