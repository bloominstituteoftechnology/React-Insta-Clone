import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faCommentAlt, faEllipsisH, faCompass, faUser, faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faHeart, faCommentAlt, faEllipsisH, faCompass, faUser, faCameraRetro);

class App extends Component {
  constructor () {
    super();

    this.state = {
      dummyData: dummyData
    }
  }

  render() {
    return (
      <div className="app-container">
        <SearchBar />
        {this.state.dummyData.map(data => (
          <div key={data.timestamp}>
              <PostContainer username={data.username}
                             thumbnail={data.thumbnailUrl}
                             image={data.imageUrl}
                             likes={data.likes}
                             timestamp={data.timestamp}
                             comments={data.comments} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
