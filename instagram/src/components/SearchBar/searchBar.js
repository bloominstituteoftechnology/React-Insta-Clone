import React, { Component } from 'react';
import '../assets/css/search.css';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    search = (value) => {
        this.props.search(value.trim());
    }
    handleChange = (event) => {
        const value = event.target.value;
        this.search(value);
        this.setState({
            value
        })
        
    }
    render() {
        return (
            <div className="search">
                <input type="text" onChange={this.handleChange} value={this.state.value} placeholder="Search"/>
            </div>
        )
    }
}