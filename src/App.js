import React, { Component } from 'react';
import './App.css';
import './dummy-data.js'

class App extends Component {
  render() {
    return (
      <div className="App">
		<div className="SearchBarContent">
			<img src="" alt="Logo"></img>
			<h1>InstaClone</h1>

			<div className="search">
				<input/>
			</div>

			<div className="Buttons">
				<img src="" alt="button1"></img>
				<img src="img/heart.png" alt="button2"></img>
				<img src="" alt="button3"></img>
			</div>
		</div>
      </div>
    );
  }
}

export default App;
