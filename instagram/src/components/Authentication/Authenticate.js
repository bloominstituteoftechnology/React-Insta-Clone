import React from 'react';


const Authenticate = (App) => class extends React.Component
{
    constructor(props){
        super(props)

        this.state = {

            login: false

        }
    }

    componentDidMount() {
        if(!localStorage.getItem('user')){
            this.setState({
                login: false
            })
        }

        else {
            this.setState({
                login: true 
            })
        }
    }
    

render(){
    if(this.state.login) return <App />
    return(
        <div></div>
    )
}
}

export default Authenticate ;