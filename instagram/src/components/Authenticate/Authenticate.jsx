import React, {Component} from 'react';
import Login from '../login/Login';

const Authenticate=(Postsprops)=> 
class extends Component {
    constructor() {
        super();
        this.state = { variable:true,  }
    }
    render() { 
        return (
            this.state.variable ? <Postsprops /> : <Login />
          );
    }
}
 
export default Authenticate;
