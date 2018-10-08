import React  from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchContainer from './Components/SearchBar/SearchContainer';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends React.Component {

  state = {
    newComment: "",
    data: [{dummyData}],
  }
  

commentHandler = (e) => {
      this.setState({
        newComment: e.target.value,
      });
}

 
  render() {
    return (
      <div className="App">
              <SearchContainer  />
              <PostContainer 
              commentHandler={this.commentHandler}
              dummyData={dummyData} />
      </div>
    );
  }
}

export default App;
