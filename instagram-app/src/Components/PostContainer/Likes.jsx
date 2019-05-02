import React, { Component } from "react";
import "./Post.css";
import styled from 'styled-components'

class Likes extends Component {
  constructor(props) {
    super();
    //set initial number of likes from JSON file 
    this.state = {
        numberOfLikes: props.numberOfLikes
      };
  }

  Counter = ()=>{
    this.setState({numberOfLikes: this.state.numberOfLikes+1})
  }



  render() {
    const StyledLikes = styled.div`
      border: solid red 1px;
      text-align: left;
      padding-left: 2%;
      font-size: 1.5rem;
      font-weight: 500
      i{
        margin-right: 2%;
      }
     
    `

    return (
      <StyledLikes>
        <i className="far fa-heart" onClick={this.Counter} /> <> </>
        <i className="far fa-comment" />
        <div>{this.state.numberOfLikes} Likes </div> 
       
      </StyledLikes>
    );
  }
}

export default Likes;
