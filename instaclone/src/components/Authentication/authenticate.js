import React from 'react';

const Authenticate = App => LoginPage =>{
  class authenticate extends React.Component {
      constructor(props){
          super(props);
          this.state ={loggedIn: false};
      }
    componentDidMount(){
        if (!localStorage.getItem('user')){this.setState(
            {loggedIn: false}
        );
        }else{ this.setState({loggedIn: true})};
    }
    
    render() {
      if(this.state.loggedIn) return (<App />);
      return <LoginPage />;
    }
  };
}
  export default Authenticate;