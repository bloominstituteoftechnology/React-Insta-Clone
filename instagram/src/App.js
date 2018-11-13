import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DummmyData from './dummy-data';
import SearchBarBox from './components/SearchBar/SearchBarBox';
import Posts from './components/PostContainer/Posts';
import PropTypes from 'prop-types';


class App extends Component {
  constructor(){
    super();
    this.state = {
      InstaPosts: []
      {/*filteredInstaPosts: []*/}
    };
  }

  componentDidMount() {
    this.setState({ InstaPosts: DummmyData });
  }

  addPost =() => {
    {/*ev.preventDefault();*/}
    this.setState({
      InstaPosts: [...this.state.InstaPosts,
      {

      }],
      inputText:''
    })
  }

 
  




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <SearchBarBox />
        <Posts IGPosts={this.state.InstaPosts} />
      </div>
    );
  }
}


{/* 
App.proptypes = {
  InstaPosts: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.num,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          UserName: PropTypes.string
        })
      )
    })
*/}

export default App;
