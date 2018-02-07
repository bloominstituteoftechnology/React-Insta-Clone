import React from 'react';
import ReactDOM from 'react-dom'

class postContainer extends React.Component {
  render () {
    return (
    <div className='message-box'>
        <header className="App-header">
          <img src={"./assets/android-icon-96x96.png"} className="App-logo" alt="logo" />
          <h1 className="App-title">This is D2rd-o-Gram</h1>
        </header>

      Hello, my name is Post Container {this.props.name}
    </div>
 );
 }
}


export default postContainer;