import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import {Grid, Row, Col } from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
                <Grid className="box">
                    <Row>
                        <Col md={6}>
                            <SearchBar />
                        </Col>
                    </Row>
                </Grid>    
        </header>
        
        {dummyData.map(user => {
          return (
            <PostContainer key={user.username} user={user} />
          );
        })}
      </div>
    );
  }
}

export default App;
