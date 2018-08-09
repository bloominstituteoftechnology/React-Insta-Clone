import React, {Component} from 'react';
import Login from '../Login/Login';

const Authenticate=(Postsprops)=> 
class extends Component {
    constructor() {
        super();
        this.state = { variable:false,  }
    }
    render() { 
        return (
            this.state.variable ? <Postsprops /> : <Login />
          );
    }
}
 
export default Authenticate;
