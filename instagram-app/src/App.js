import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     posts: dummyData
      
    };
  };



  render() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         {this.state.dummyData.userName} 
         
        </p>
       
         
        
      </header>
    </div>
  );
  }
}
export default App;
