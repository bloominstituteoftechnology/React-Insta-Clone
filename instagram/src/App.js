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
       search: ''
    }
   }
   componentDidMount() {
      this.setState({
         data: dummyData
      })
   }
   
  displaySearch = (value) => {
    const filteredData= this.state.data.filter(item => {
        return item.username.indexOf(value) > -1;
    });
    this.setState({
         data:filteredData
    });
     console.log('working');
  }
  render() {
    let data = this.state.data;
    console.log(data);
    if(!data.length) {
      return <h2>Please wait. Loading data....</h2>
    }
    // console.log(this.displaySearch);
    return (
     
      <div className="App">
        <Search display={this.displaySearch} />
        {data.map(postObject=> <PostContainer key={Date.now()} card={postObject} />)}
      </div>
    );
  }
}

// App.propTypes = {
//     data:PropTypes.array
// }
App.propTpes = {
  data: PropTypes.arrayOf(PropTypes.object),
 }

export default App;
