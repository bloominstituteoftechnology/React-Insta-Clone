import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1024px;
	position: fixed;
	top: 0px;
	padding: 40px;
	height: 50px;
	background-color: white;
`;

const HeaderImg = styled.img`
	height: 45px;
	width: 45px;
	cursor: pointer;
	margin: 0px 8px;
`;
	
const Logo = styled.img`
	height: 45px;
	border-right: 1px solid grey;
	cursor: pointer;
	padding-right: 25px;
`;

const SearchBarForm = styled.form`
	width: 100%;
	margin: 0px 25px;
`;

const SearchBarInput = styled.input`
	font-size: 1.2rem;
	width: 100%;
	padding: 3px 20px;
`;

class SearchBar extends React.Component {

	handleChange = (event) => {
		this.props.filterPosts(event.target.value);
	};

	logout = () => {
		localStorage.removeItem('username');
	};

	render() {
		return (
			// Earlier Code:
			// <div className='search-bar'>
			// 	<div className='search-bar-left-icons'>
			// 		<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIQwyp45PNTDM8mPakqTqEhGD-sRtfFBad5vh_Vc0y6ijRbbi' alt='Instagram camera logo' className='instagram-camera-logo'/>
			// 		<img src='http://trifunk.com/wp-content/uploads/2013/06/instagram-logo.png' alt='Instagram logo' />
			// 	</div>

			// 	<div className='search-bar-middle-box'>
			// 		<form onChange={this.handleChange}>
			// 			<input type="text" placeholder="&#x1f50d; Search"  />
			// 		</form>
			// 	</div>

			// 	<div className="search-bar-right-icons">
			// 		<img src='https://image.freepik.com/iconen-gratis/safari-kompas-logo-ios-7-interface-symbool_318-33584.jpg' alt='Compass Icon' />
			// 		<img src='https://ubisafe.org/images/svg-heart-black-and-white-6.png' alt='Heart logo' />
			// 		<img src='https://d30y9cdsu7xlg0.cloudfront.net/png/137578-200.png' alt='Person logo' />
			// 	</div>
			// </div>
			<Header>
				<HeaderImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIQwyp45PNTDM8mPakqTqEhGD-sRtfFBad5vh_Vc0y6ijRbbi' alt="camera logo" />
				<Logo src='http://trifunk.com/wp-content/uploads/2013/06/instagram-logo.png' alt='Instagram logo' />
				<SearchBarForm onChange={this.handleChange}>
					<SearchBarInput type='text' placeholder="&#x1f50d; Search"  />
				</SearchBarForm>
				<HeaderImg src='https://image.freepik.com/iconen-gratis/safari-kompas-logo-ios-7-interface-symbool_318-33584.jpg' alt='Compass Icon' />
				<HeaderImg src='https://ubisafe.org/images/svg-heart-black-and-white-6.png' alt='Heart logo' />
				<HeaderImg src='https://d30y9cdsu7xlg0.cloudfront.net/png/137578-200.png' alt='Person logo' onClick={this.logout} />
			</Header>
		)
	}
}

export default SearchBar;