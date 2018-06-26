import React from 'react';
import ReactDOM from 'react-dom';
import Authenticate from "./Authentication/Authenticate"

const WrappedApp = Authenticate(App);
function App (){
  return(
    <div></div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WrappedApp />, rootElement);
// <PostPage dummyData={this.state.dummyData}/>
// <Login login={this.props.login}/>
