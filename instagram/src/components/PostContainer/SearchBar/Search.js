import React from 'react';
import './SearchBar.css';


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={
            input: ''
        }
        
    }

    changeHandler = event => {
        this.setState({ input: event.target.value })
      };



    render() {
        return (
        <div>
        <form
        onSubmit={(event) => {
            event.preventDefault();
            this.props.handleFilter(this.state.input)
        }}>

        <input
        type="search"
        name="postFilter"
        className='search'
        placeholder="Search"
        value={this.props.postFilter}
        onChange={this.changeHandler}
        />

        </form>
        </div>      
        )
    }
}

export default Search;
