import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {dummyData} from '../dummy-data';

const dummy = props => { 
  return <h1>bruh</h1>
}

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
      posts: 
    }
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
