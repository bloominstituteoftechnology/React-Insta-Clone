
import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }

    handleInput = (event) => {
        const {value} = event.target;
        this.setState({
            input: value
        })
    }

    preventDefault = (event) => {
        event.preventDefault();
    }

    render(){
        return (
            <div className='search'>
                <form onSubmit={this.preventDefault}>
                    <input onChange={this.handleInput} type='text' placeholder='&#x1F50D; Search'>
                    </input>
                </form>
            </div>
        )
    }
};


export default Search;

//need to overlay the icon in search bar if want icon, and make disappear on input