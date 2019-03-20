import React from 'react';

const withAuthenticate = ComponentOne => ComponentTwo =>
  class extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            loggedIn: false
        }
    }

    componentDidMount(){
        if (!localStorage.getItem('user')){
            this.setState({loggedIn: false})
        } else {
            this.setState({loggedIn:true})
        }
    }

    render() {
        return this.state.loggedIn ? <ComponentOne /> : <ComponentTwo />

  }};

export default withAuthenticate;