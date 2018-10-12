import React from 'react';
import LogIn from './LogIn';



const Authentication = App => 
class extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            LoggedIn: false,
        }
    }

    componentDidMount(){
       if (!localStorage.getItem('user')) {
           this.setState({
               LoggedIn:false,
           })
       }

       else {
        this.setState({
            LoggedIn:true,
        })
       }
    }

    render() {
        if (this.state.LoggedIn) return <App />;
        return <LogIn />
    }
}

export default Authentication;