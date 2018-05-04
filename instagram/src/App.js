import React, { Component } from 'react';
import './App.css';
import FaInstagram from 'react-icons/lib/fa/instagram';
import dummyData from './dummy-data.js';
import {
  Card, CardImg, CardText, CardTitle, CardBody} from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <nav class="navbar navbar-light justify-content-between">
          <a class="navbar-brand"><FaInstagram /> | <img src="./assets/instaword.png" alt="instagram" width="120" height="40"/></a>
          <form class="form-inline">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <div>
            <img src="./assets/discover.png" alt="discover" height="30" width="30"/>
            <img src="./assets/like.png" alt="like" height="30" width="30"/>
            <img src="./assets/profile.png" alt="profile" height="30" width="30"/>
          </div>
        </nav>
        <Card>
          <nav class="navbar navbar-light">
            <a class="navbar-brand" href="#">
              <img src="/assets/brand/bootstrap-solid.svg" width="50" height="50" class="d-inline-block align-top" alt="logo" />
              USERNAME
            </a>
          </nav>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <div>
              <img className="float-left" src="./assets/like.png" alt="like" height="30" width="30" />
              <img className="float-left" src="./assets/comment.png" alt="comment" height="28" width="25" />
            </div>
            
            <div className="strong">
              373 likes
            </div>
            <CardText className="text-left"><span>UserName</span> </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default App;
