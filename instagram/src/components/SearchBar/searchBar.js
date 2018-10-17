import React from 'react';
import './searchBar.css';


class SearchBar extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        searchInput: "",
        search: props.username,
        placeholder: 'Search',
    }


    addNewSearch = event => {
        event.preventDefault();
        const newSearch = {username: 'JakeAndPhil', text: this.state.comment} 
        const newSearch = this.state.comments.slice();
        search.push(newSearch)
        this.setState({comments, comment: '', placeholder: 'Add a comment...'})
        console.log(newComment)
        
     };

     changeHandler= event => {
        console.log('event name', event.target.name);
        console.log('event value', event.target.value);
        this.setState({ search: event.target.value });
    };

    render () {
        return (
            <form className = 'searchBar'>
            <input type="text" placeholder="Search" />
            </form> 

        )
      
    
    }
    
}
 
export default SearchBar;