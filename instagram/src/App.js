import React from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import { Col, Row, Grid } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12} >
            <SearchBar />
          </Col>
        </Row>
        {dummyData.map((post, i) => {
          return (
            <Row className="show-grid" key={i}>
              <Col xs={6} md={6}>
                <PostContainer key={i} postData={post} />
              </Col>
            </Row>
          )
        })}
      </Grid>
    </div>
  )
}

    
  //   {dummyData.map((post, i) => {
  //     return (
  //       <Row className="show-grid">
  //       <Col xs={10} md={8}>
  //         <PostContainer key={i} postData={post} />
  //       </Col>
  //     </Row>
  //     )
  //   } 
  // )
  //   })}
  

export default App;
