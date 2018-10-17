import React from 'react';
import './searchBar.css';


class SearchBar extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        dummyData: props.dummyData, 
        placeholder: 'Search',
        
    }

    }

    

    //  changeHandler = event => {
    //     console.log('event name', event.target.name);
    //     console.log('event value', event.target.value);
    //     this.setState({ search: event.target.value });
    // };
    
    render () {
        return (
            <form className = 'searchBar'>
            <input onKeyDown={this.props.search} type="text" placeholder="Search" />
            </form> 

        )
      
    
    }
    
}
 
export default SearchBar;