import React from 'react';
import Search from './search';


// const SearchBar = () => {
//    return(
    
//    );
// }

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchInput: ""
        }
    }

    changeHandler = event => {
        this.setState({[event.target.name] : event.target.value});
    }



    render(){
        console.log(this.state.searchInput);
       return(
        <div className="search-bar-container">
            <Search changeHandler={this.changeHandler} searchInput={this.state.searchInput} />
        </div>
       );
    }
}

export default SearchBar;