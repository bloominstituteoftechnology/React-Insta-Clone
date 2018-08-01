import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';

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
        <PostsPage data={this.state.data} filter={this.filterData} like={this.likeIncrement} />
      </div>
    );
  }
}

export default App;
