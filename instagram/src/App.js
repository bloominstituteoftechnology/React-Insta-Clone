import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
// import PropTypes from 'prop-types';


class App extends React.Component {


  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){

      this.setState({data: dummyData })

  }

    render(){

      console.log("from app.js",this.state.data);

      return (
        <div className="App">
          <SearchBar />
          <PostContainer postsData={this.state.data} />
        </div>
      );
  }

  
}

// App.propTypes = {
//  data: PropTypes.shape([{

//     id: PropTypes.string,
//     username: PropTypes.string,
//     thumbnailUrl: PropTypes.string,
//     imageUrl: PropTypes.string,
//     likes: PropTypes.number,
//     timestamp: PropTypes.string,
//     comments: PropTypes.array


//   }])
// }



export default App;
