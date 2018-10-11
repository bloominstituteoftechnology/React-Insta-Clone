import React, { Component } from 'react';
import './SearchBar.css';
import {
    
    Navbar,
    
  } from 'reactstrap';
import dummyData from '../dummy-data';

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

      handleLogOut = event => {
          localStorage.clear('user');
          window.location.reload();
      }

    // doSearch = event => {
    //     let filteredUsers = this.props.comments.filter(
    //         (user) => {
    //             return user.username.indexOf(this.state.search) !== -1;
    //         }
    //     )
    // }



    render() {
        // let filteredUsers = this.props.comments.filter(
        //     (user) => {
        //         return user.username.indexOf(this.state.search) !== -1;
        //     }
        // )
    return (
        <Navbar>

            <i class="fab fa-instagram fa-2x"></i>
            <h1>Instagram</h1>
            <form>
                <textarea 
                placeholder="&#x1F50D; Search"
                value={this.state.search}
                onChange={this.searchHandler}
                onKeyDown={this.enterHandler}
                />
            </form>
            {/* <li>
                {filteredUsers.map((user) => {
                    return <dummyData username={user} key = {user.id} />
                })}
            </li>  */}
            <i class="far fa-compass fa-2x lt"></i>
            <i class="far fa-heart fa-2x lt"></i>
            <i onClick={this.handleLogOut} class="far fa-user fa-2x lt"></i>
        </Navbar>

    )
}
}

export default SearchBar;