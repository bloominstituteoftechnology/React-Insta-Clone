import React from 'react';
import PostContainer from './PostContainer.js';
import SearchBar from '../SearchBar/SearchBar.js';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import PropType from 'prop-types';
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";

const TweensRef = [TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TweensRef];


class PostsPage extends React.Component {  
    
    constructor(props){
        super(props);
        this.state = {postContainers: []}
        this.myTween = new TimelineLite();
        this.postContainers = document.querySelectorAll('.post-container');
        this.animate = this.animate.bind(this);
    }

    animate(){
        let philzcoffee = document.querySelector('.philzcoffee');
        this.myTween.from(philzcoffee, 1, {x: 100, width: 0, autoAlpha: 0});
    }

    componentDidMount(){
        this.myTween.from(this.postContainers, 0.5, {y: 0, autoAlpha: 1}, 0.1);
        this.setState({postContainers: this.postContainers});
    }
render(){
    return (
        <div>
            <SearchBar searchInput={this.props.searchInput} 
                       filter={this.props.filter}
                       logOut={this.props.logOut}
                       animate={this.animate}/>
      <div className="container">
        
        {this.props.filteredList.length > 0 ? this.props.filteredList.
        map((post, index) => {return (<div id={{index}} ref={div => this.postContainers = [...this.postContainers, div]}><PostContainer dummyData={post}/></div>) }) : 
        
        this.props.dummyData.map((post, index) => {return (<div id={index} ><PostContainer animate={this.animate} dummyData={post} /></div> )})}
        
      </div>

        </div>
    )
        }

}

export default PostsPage;