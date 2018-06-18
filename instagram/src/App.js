import React, { Component } from 'react';
import dummyData from './components/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data: dummyData,
      input: ''
    }
    this.handleChange = (e) =>{
      console.log(e.target.value);
      // const text = this.state.input.slice();
      const newtext = e.target.value.slice();
      
      this.setState({
        input: newtext
      })
    }
    this.addInput = (text) =>{
      const newText = this.state.input.slice();

      const datas = this.state.data.slice();
      const newObj = {
        text: newText,
        username: 'sibhat'
      }
      datas[0].comments.push(newObj);
      this.setState({
        data: datas,
        input: ''
      })
    }
  }
  render() {
    // console.log(this.state.input);
    console.table(this.state.data);
    return (
      this.state.data.map((ele, index) => (<PostContainer key={index} data={ele} addinput={this.addInput} input={this.state.input} change={this.handleChange}/>))
    );
  }
}

export default App;
