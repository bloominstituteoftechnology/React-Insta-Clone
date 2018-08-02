import React, { Component } from 'react';

import dummyData from './dummy-data'; 
import Authenticate from './components/Authentication/Authenticate';
import AppStyled from './AppStyled.js';

 


class App extends Component {
  constructor(){
    super();
    this.state = {dummyData: [], cmdCalled: false, searchText: "", prevDummyData: []}
  }

  componentDidMount () {
    
    this.setState({dummyData:dummyData, prevDummyData: dummyData, cmdCalled: true});
    
  }
  

  render() {
    
    
    
    return (
        
        <AppStyled className = "App">
          <AuthenticatedApp />
          
        </AppStyled> 
        
        

    );
    
  }
}
const AuthenticatedApp = Authenticate(App);

export default App;
