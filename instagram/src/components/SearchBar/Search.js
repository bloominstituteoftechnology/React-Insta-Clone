import React, { Component } from 'react';

class Search extends Component {
	constructor(props) {
		super(props);
        this.state = {
            search: '',
        }
        
    }
    
    onChangeHandler =(event)=>{
		this.setState({search: event.target.value});
	}    

	render() {
	  return (
        <div>
           <input placeholder="Search" onChange={this.onChangeHandler} value={this.state.search}/>
        </div>
      )

    }

}

export default Search;