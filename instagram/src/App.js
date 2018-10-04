import React  from 'react';
import './App.css';
import SearchContainer from './Components/SearchBar/SearchContainer';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends React.Component {

  state = {
    data: [{dummyData}],
  }







  render() {
    return (
      <div className="App">

              <SearchContainer />
              <PostContainer dummyData={dummyData} />

      </div>
    );
  }
}

export default App;
