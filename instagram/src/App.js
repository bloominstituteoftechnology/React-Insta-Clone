import React from 'react';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import data from './dummy-data.js';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}
	
	componentDidMount() {
		this.setState({ data: data});
	}

	filterPosts = (str) => {
		const filteredPosts = data.filter(post => post.username.includes(str));
		this.setState({ data: filteredPosts });
	};
	
	render() {
		return (
			<div className="main-container">
				<div className="App">
					<SearchBar filterPosts={this.filterPosts} />
					
						<div className='positioning-container'>
							<PostContainer data={this.state.data} />
						</div>
				</div>
			</div>
		);
	}
}
	
export default App;
