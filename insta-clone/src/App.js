import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import dummy from './dummy-data';

class App extends Component {
  state = {
    data: dummy,
  }
	render() {
		return (
			<div className="App">
				<Header />
				<section className="container App__cards-container">
          {this.state.data.map(( e, i ) => <Card key={ i } { ...e }/>)}
				</section>
			</div>
		);
	}
}

export default App;
