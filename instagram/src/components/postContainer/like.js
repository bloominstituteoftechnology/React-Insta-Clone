import React, { Component } from 'react';
import './container.css';
import heart from './images/heart.png';
import heartRed from './images/heartRed.png';

class Like extends Component{
constructor(props) {
   super(props);
   this.state = {
	   imgSrc:{heart}.heart,
	   liked:false,
	   likes:{props}.props.likeNumber
	    }
	   this.handleClick=this.handleClick.bind(this);
}
   
  handleClick(){
  if(this.state.liked===false){
	this.setState({imgSrc:{heartRed}.heartRed});
	this.setState({liked:true});
	let newvalue = this.state.likes;
	newvalue += 1;
	this.setState({likes:newvalue})
  }
  else{
	this.setState({imgSrc:{heart}.heart});
	this.setState({liked:false});
	let newvalue = this.state.likes;
	newvalue -= 1;
	this.setState({likes:newvalue})
  }
  }

   render() {
    return (
      <div className={`${"heartIcon"} + ${this.state.liked}`}>
        <img onClick={this.handleClick} src={this.state.imgSrc}/>
      </div>
    );
}
}

export default Like;