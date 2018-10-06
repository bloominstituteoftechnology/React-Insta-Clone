import React, { Component } from 'react';
import './SearchBar.css';
import {
    
    Navbar,
    
  } from 'reactstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
        }
      }

      searchHandler = (event) => {
        const {value} = event.target;
        // console.log(value);
        this.setState({
          search: value,
        });
      };

    enterHandler = event => {
        if (event.keyCode === 13 && event.shiftKey === false) {
          if (this.state.search.length >= 1)
            event.preventDefault();
          this.doSearch(event);
        }
      };

    doSearch = event => {
        this.state.comments.filter()
        if (this.state.search === this.state.comments.username) {
            return alert('Found it!')
        } else{ alert('Not found!')}
    }

    render() {
    return (
        <Navbar>
            <i class="fab fa-instagram fa-2x"></i>
            <h1>Instagram</h1>
            <form>
                <textarea 
                placeholder="Search"
                value={this.state.search}
                onChange={this.searchHandler}
                onKeyDown={this.enterHandler}
                />
            </form>
            <i class="far fa-compass fa-2x lt"></i>
            <i class="far fa-heart fa-2x lt"></i>
            <i class="far fa-user fa-2x lt"></i>
        </Navbar>

    )
}
}

export default SearchBar;