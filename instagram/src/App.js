import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
			searchLid: true,
			searchText: '',
			commentText: []
		};
	}

	toggleSearchLid = () => {
		this.setState({
			searchLid: !this.state.searchLid
		});
	};

	componentDidMount() {
		this.setState({
			data: dummyData
		});
	}

	render() {
		return (
			<div className="App">
				<SearchBar
					searchLid={this.state.searchLid}
					toggleSearchLid={this.toggleSearchLid}
				/>

				<PostContainer posts={this.state.data} />
			</div>
		);
	}
}

export default App;
