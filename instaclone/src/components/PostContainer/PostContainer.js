import React, { Component } from 'react';
import './PostContianer.css';
import SearchBar from '../SearchBar/SearchBar';
import PostCreation from './PostCreation';

class PostContainer extends Component {
	render() {
		return (
			<div>
        <SearchBar 
          loginState={this.props.loginState}
          searchInput={this.props.searchInput}
          searchHandler={this.props.searchHandler}
        />
				<PostCreation
					appData={this.props.appData}
					
				/>
			</div>
		);
	}
}
export default PostContainer;
