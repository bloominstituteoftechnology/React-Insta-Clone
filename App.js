import React, { Component } from 'react';
import dummyData from './dummy-data';

class App extends Component {
    constructor() {
	super();
	this.state = {
	    myPosts: dummyData
	};
    }
    
    componentDidMount() {
	this.getPosts('./dummy-data.js');
    }

    render() {
	return (
	    <div className="App">
              <p>I made an edit</p>
	    </div>
	);
    } 
}

export default App;
