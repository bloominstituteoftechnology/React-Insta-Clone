import React from 'react';
import Login from '/Users/cengizbug/Lambda Projects/02_Month 2/React-Insta-Clone/instagram/src/components/Login/Login';


const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      };
    }
    componentDidMount() {
        if (localStorage.getItem('username')) {
          this.setState({ loggedIn: false});
        } else {
          this.setState({ loggedIn: true});
        }
    }

    changeLogin = () => {
      this.setState({
        loggedIn: true,
      })
    }

    render() {
      if (this.state.loggedIn) return <App />; 
      return <Login changeLogin={this.changeLogin}/>
    }
  } 

    export default Authenticate;