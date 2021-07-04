import React from 'react';
import Login from '../LoginComponent/Login';

const Authentication = App=> class extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
        isLoggedIn: false
       };
   }

   componentDidMount() {
       if (!localStorage.getItem('user')) {
           this.setState({isLoggedIn: false});
       } else {
           this.setState({isLoggedIn: true});
       }
   }

   render() {
       if (this.state.isLoggedIn) return <App />;
       return <Login />
   }
}

export default Authentication;