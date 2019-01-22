import React from 'react';


class Likes extends React.Component{
  state = {likes: 0};
  
  
  clickHandle = e => {
    this.setState(prevState =>({likes: prevState.likes + 1}))
  }

  render(){
    return(
    <div className = "heart" >
    <button onClick = {this.clickHandle}>{this.state.likes}</button>
    </div>
    )
  }
}
export default Likes