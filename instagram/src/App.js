import React from 'react';
import PostPage from './Components/PostContainer/PostPage';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';
import {faHospitalAlt} from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor () {
    super (); 
    this.state = {}
  }
  
  render() {
    return (
      <div>
        <PostPage/>
      </div>
    );
  }
}

export default App;
