import React,{ Component } from "react";
import dummyData from "./dummy-data";
import "./App.css";
import PostContainer from "./Components/PostContainer/PostContainer";
import SearchBarContainer from './Components/SearchBar/SearchBarContainer'



class App extends Component {

  state={
    coolData:[]
    }

    componentDidMount() {
      this.setState({ coolData: dummyData });
    }
  
  render() {
    return (
    <div className="App">
        <SearchBarContainer/>
      {this.state.coolData.map(e => (
        <PostContainer Data={e} key={e.timestamp} />
      ))}
    </div>
  );

}
}

export default App;
