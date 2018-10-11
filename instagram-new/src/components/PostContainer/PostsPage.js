import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import Search from '../SearchBar/Search';
import Post from './Post';
import { ContentContainer } from './PostStyle';


class PostsPage extends Component {
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

  counter = (event, index) => {
    event.preventDefault();
    const hold = this.state.filteredData;
    hold[index].likes++;
    this.setState({filteredData:hold})
  }

  render() {
    return (
      
      <div className="App">
        <Search inputChange = {this.inputChange} filtered = {this.filtered} />
        <ContentContainer>
            <Post dummyData ={this.state.filteredData} counter = {this.counter}/>
        </ContentContainer>
      </div>
    );
  }
}

export default PostsPage;