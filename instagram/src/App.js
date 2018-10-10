import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './Dummy'
import PostPage from './components/PostContainer/PostPage';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data : [],
      
    }
  }
  componentDidMount(){
    this.setState({
      data: dummyData 
    })
  }
  searchFilter = (event) => {
    const search = event.target.value;
    const data = [];

    this.state.data.filter(post =>{
      return post.username.includes(search) ? data.push(post) : null;
    })
    search === '' ? this.setState({data: dummyData}) : this.setState({data:data})
  }
  
  
  render() {
    return (
      <div>
        <PostPage data = {this.state.data} />
      </div>
    );
  }
}
App.propTypes = {
  dummyData : PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl:PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments:PropTypes.arrayOf(
        PropTypes.shape({
          username:PropTypes.string,
          text: PropTypes.string,
        })
      )
    }).isRequired
  )
}

export default App;
