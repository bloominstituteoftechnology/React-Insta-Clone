import React from 'react';
import '../SearchBar/searchstyle.css';
import  logo from './logo.png';
import logo2 from './logo2.png';
import location from './location.ico';
import heart2 from './heart2.png';
import human from './human.png';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dummyData: props.dummyData,
            input:"",
            placeholder:"Search"

        };
    }

    // addNewComment = (event, i) => {
    //     event.preventDefault();
    //     let comments = this.state.comments.slice();
    //     comments.push({text: this.state.input, username:'Stickmonster89'});
    //     this.setState({
    //         comments, 
    //         input:"", 
            
    // });

    // clearCompletedTodos = e => {
    //     e.preventDefault();
    //     let todos = this.state.todos.slice();
    //     todos = todos.filter(todo => !todo.completed);
    //     this.setState({ todos });
    //   };


    // newSearch = event => this.setState({input:event.target.value})

    // searchInput = (event, i) => {
    //     event.preventDefault;
    //     let search = this.state.dummyData.username.slice();
    //     this.username.filter()
    //     alert('this')      
        
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
            <form onSubmit={this.searchInput}>
                <input onChange={this.newSearch} type="text" placeholder={this.state.placeholder} value={this.state.input}/>
            </form>
            <div className="imgholder">
                <img src={location} alt=""/>
                <img src={heart2} alt=""/>
                <img src={human} alt=""/>
            </div>
        </div>
    )
}
}
 
export default SearchBar;