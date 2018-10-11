import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from './components/SearchBar/Search.js';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
// import PostPage from './components/PostContainer/PostPage';
import PropTypes from 'prop-types';


class App extends React.Component {
   constructor() {
    super();

    this.state = {
       data: [],
       searchData:[]
    }
   }
   componentDidMount() {
      this.setState({
         data: dummyData
      })
   }
   
  displaySearch = (value) => {
    const filteredData= this.state.data.filter(item => item.username.includes(value));
    this.setState({
         searchData:filteredData
    });
     console.log('working');
  }
  render() {
    let data = this.state.searchData.length > 0 ? this.state.searchData : this.state.data;
    console.log(data);
    if(!data.length) {
      return <h2>Please wait. Loading data....</h2>
    }
    // console.log(this.displaySearch);
    return (
     
      <div className="App">
        <Search display={this.displaySearch} />
        {data.map(postObject=> <PostContainer key={postObject.timestamp} card={postObject} />)}
        {/* <Postpage display={this.displaySearch} data={data} /> */}
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
