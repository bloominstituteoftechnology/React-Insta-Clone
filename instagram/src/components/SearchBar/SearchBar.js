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
           items: this.props.usrData,
           searchInput: ""
        }
    }

    // componentDidMount(){
    //     this.setState({data: this.props.usrData})
    // }

    changeHandler = event => {
        this.setState({[event.target.name] : event.target.value});
    }

   searchResults = event =>{
        event.preventDefault();
        console.log(this.state.items);
   }

    render(){
       return(
        <div className="search-bar-container">
            <Search changeHandler={this.changeHandler} searchInput={this.state.searchInput} searchResults={this.searchResults} />
        </div>
       );
    }
}

export default SearchBar;