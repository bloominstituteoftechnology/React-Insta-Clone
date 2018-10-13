import React from 'react';
import App from '../../App'
import LoginPage from '../Login/LoginPage';


const Authenticate = App => {
   return class extends React.Component{
        constructor(props){
        super();
        this.state = {
            loggedIn: false
         };
        }
        componentDidMount(){
            !localStorage.getItem('user')?
                this.setState({ loggedIn: false}):
                this.setState({ loggedIn: true });
            }
        
    
        render(){
          if (this.state.loggedIn) return <App />;
          return <LoginPage />
        }
  }
}


export default Authenticate;