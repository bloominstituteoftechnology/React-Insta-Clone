import React from 'react';
import Search from './search';
import dummyData from '../../dummy-data';


// const SearchBar = () => {
//    return(
    
//    );
// }

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           data: [],
           searchInput: ""
        }
    }

    componentDidMount(){
        this.setState({data: dummyData})
    }

    changeHandler = event => {
        this.setState({[event.target.name] : event.target.value});
    }

   searchResults = event =>{
        event.preventDefault();
        this.setState({
            data: this.state.data.filter(item => {

                if(this.state.searchInput === item.username){
                    return item.username;
                }else{
                    return item;
                }
            }),
            searchInput: ""
        });
   }

    render(){
        console.log(this.state.data);
       return(
        <div className="search-bar-container">
            <Search changeHandler={this.changeHandler} searchInput={this.state.searchInput} searchResults={this.searchResults} />
        </div>
       );
    }
}

export default SearchBar;