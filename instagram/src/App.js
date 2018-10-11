import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from './components/SearchBar/Search.js';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import PropTypes from 'prop-types';


class App extends React.Component {
   constructor() {
    super();

    this.state = {
       data: [],
       newData:[]
    }
   }
   componentDidMount() {
      this.setState({
         data: dummyData
      })
   }
   addLikes = () => {
     this.setState({
         
     })
   }
  render() {
    let data = this.state.data;
    // console.log(data);
    return (
     
      <div className="App">
        <Search  />
        {data.map(postObject=> <PostContainer key={postObject.likes} card={postObject} />)}
      </div>
    );
  }
}

PostContainer.propTypes = {
    card:PropTypes.arrayOf({
        key: PropTypes.number.isRequired
    })
}

export default App;
