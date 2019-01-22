import React from 'react';

const Authenticate = App => {
  return class extends React.Component {
    constructor(){
      super()
      this.state = {
        login: false
      }
    }
    redner() {
      return(
        <Conditional />
      )
    }
  }
}

const Conditional = props => {
  if(props.login){
    return (
      <PostPage />
    )
  }
  else {
    return (
      <Login />
    )
  }
}

export default Authenticate;
