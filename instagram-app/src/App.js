import React from 'react';
import SearchBar from './component/SearchBar/SearchBar';
import PostContainer from './component/PostContainer/PostContainer';
import dummyData from './dummy-data';

import './App.css';

class App extends React.Component {
    state = {
      data: []
     }

  componentDidMount(){
    this.setState({data: dummyData})
  }


render() {
  console.log('render', this.state.data);
  return(
    <div className="App">
      <SearchBar />
      <PostContainer data={this.state.data}/>
    </div>

    )
  }
}
export default App;
