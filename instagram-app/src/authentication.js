import React from 'react';



let withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor(props){
      super(props);
      this.state={
        isLoggedIn:false
      }
    }

    componentDidMount=e=>{
     // e.preventDefault();
      if(localStorage.getItem('user')){
        localStorage.removeItem('user');
        this.setState({isLoggedIn:false});
      } else {
        (localStorage.setItem('user'));
        this.setState({isLoggedIn:true});
      }
    }


    

    render() {
      return(
    this.setState.isLoggedIn=true
    ? <PostsPage/>
    : <LoginPage/>)

    }

};

  export default withAuthenticate;

