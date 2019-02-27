import React from 'react';


const authenticate = App => (Login) => 
  class extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:'',
            
            loggedin: false,
        }
}

    componentDidMount(){
        if(localStorage.getItem('user')){
            this.setState({
                loggedin: true
            })
        } else { this.setState({loggedin:false})
        } 

    }

    render() {
      if (this.state.loggedin){
        return <App /> 
      } else {
        return <Login />
      }
  };
}
  export default authenticate