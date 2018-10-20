
import React from 'react';

class Icons extends React.Component {
    constructor(){
        super();
        this.state={}
    }

    logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    }

    render(){
        return (
            <div className='icons'>

                <a href='#'><i className="icon far fa-compass"></i></a>    

                <a href='#'><i className="icon far fa-heart"></i></a>

                <a href='#'><i className="icon far fa-user"></i></a>

                <a href='#' onClick={this.logout} ><i className="icon fas fa-sign-out-alt"></i></a>
            </div>
        )
    }
};


export default Icons;