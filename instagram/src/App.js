import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <nav class="navbar navbar-light bg-light justify-content-between">
          <a class="navbar-brand">Logo | Instagram</a>
          <form class="form-inline">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <div>
            <span>icon </span> <span>icon </span>  <span>icon </span>
          </div>  

        </nav>  
        <Card>
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
              <img src="/assets/brand/bootstrap-solid.svg" width="50" height="50" class="d-inline-block align-top" alt="logo" />
                USERNAME
            </a>
          </nav>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardText className="text-left"><span className="strong">UserName</span> Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default App;
