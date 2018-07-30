import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import dummy from './dummy-data';

class App extends Component {
  state = {
    data: dummy
  };

  render() {
    return (
      <div className="App">
        <Header />
        <section className="container App__cards-container">
          {this.state.data.map((card, i) => <Card key={i} {...card} />)}
        </section>
      </div>
    );
  }
}

export default App;
