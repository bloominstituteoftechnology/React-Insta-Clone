import React, { Component } from 'react';
// import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar';
import DummyData from '../src/dummy-data';

console.log(DummyData);

// const CharacterList = (props) => {
//   return (
//     <div className='characterList'>
//       {props.characters.map(character => {
//         return <CharacterCard
//           key={character.created}
//           character={character} />
//       })}
//     </div>
//   )
// }

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      users: DummyData
    };
  }
  
  
  render() {
    return (
      <div className="App">
        {this.state.users.map(user => (
          <div>{user.username}</div>
        ))}
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;
