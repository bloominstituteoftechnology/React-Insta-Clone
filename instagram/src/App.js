import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from './components/SearchBar/Search.js';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage.js';
import PropTypes from 'prop-types';
import Authenticate from './components/Authentication/Authenticate';


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
        {/* {data.map(postObject=> <PostContainer key={postObject.timestamp} card={postObject} />)} */}
        <PostsPage  data = {data} />
        {/* <Authenticate {PostsPage} /> */}
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

// export default App;
export default Authenticate(App);
