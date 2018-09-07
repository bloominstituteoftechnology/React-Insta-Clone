import React from 'react';


export class Logout extends React.Component {
  constructor(){
    super();
  }

  logout = () =>{
    localStorage.clear();
    window.location.reload()
}

  render () {
  return (
    <button onClick={this.logout}>Log Out</button>
  )
}
}


// export default Logout
