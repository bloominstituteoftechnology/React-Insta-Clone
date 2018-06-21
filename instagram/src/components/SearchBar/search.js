import React from 'react';
import '../SearchBar/searchstyle.css';
import  logo from './logo.png';
import logo2 from './logo2.png';
import location from './location.ico';
import heart2 from './heart2.png';
import human from './human.png';
import styled from 'styled-components';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // dummyData: props.dummyData,
            input:""

        };
    }

    // addNewComment = (event, i) => {
    //     event.preventDefault();
    //     let comments = this.state.comments.slice();
    //     comments.push({text: this.state.input, username:'Stickmonster89'});
    //     this.setState({
    //         comments, 
    //         input:""

       
    // })};

    // clearCompletedTodos = e => {
    //     e.preventDefault();
    //     let todos = this.state.todos.slice();
    //     todos = todos.filter(todo => !todo.completed);
    //     this.setState({ todos });
    //   };


    // newSearch = event => this.setState({input:event.target.value})////allows you to type into field////

    // searchInput = (event) => {
    //     event.preventDefault();
    //     let dummyData = this.state.dummyData.slice();
    //     dummyData = dummyData.filter(dummyData => {
    //         this.state.dummyData.username === this.state.input});
    //         this.setState({ dummyData: dummyData });
    //     alert("search");    
        
    // }

    
    
    render() {
    return (
        
        <div className="top">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="logo2">
                <img src={logo2} alt=""/>
            </div>
            <form onSubmit={this.props.searchInput}>
                <input onChange={this.props.newSearch} type="text" placeholder="search" value={this.props.input}/>
            </form>
            <div className="imgholder">
                <img src={location} alt=""/>
                <img src={heart2} alt=""/>
                <img src={human} alt=""/>
            </div>
        </div>
    );
}
}
 
export default SearchBar;