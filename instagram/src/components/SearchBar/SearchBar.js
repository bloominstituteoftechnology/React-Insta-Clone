import React from 'react';
import styled from 'styled-components';
import like from '../../like.png';
import home from '../../home.png';
import explore from '../../explore.png';
import profile from '../../profile.png';
import PropTypes from 'prop-types';

const HeaderContainer = styled.header`
	border-bottom: 1px black solid;
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	background: #0e3b43;
	position: fixed;
	top: 0;
`;
const NavSection = styled.section`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	width: 800px;
	height: auto;
`;
const Logo = styled.img`
	margin: 0;
	padding: 0 1%;
	width: 200px;
	height: auto;
`;

const Input = styled.input`
	background: #000000;
	width: 100%;
	height: auto;
	margin: 0;
	padding: 10px;
	border: 1px lightgray solid;
	border-radius: 5px;
	text-align: center;
	::placeholder {
		color: white;
	}
	:focus {
		outline: none;
	}
`;
const IconsDiv = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
`;

const Icon = styled.img`
	width: 50px;
	height: auto;
	margin: 0;
	padding: 10px;
`;

const SearchBar = (props) => {
	return (
		<HeaderContainer className="navigation">
			<NavSection className="nav">
				<Logo src={home} alt="home icon" />

				<form onSubmit={props.handleSearch}>
					<Input
						type="text"
						name="searchInput"
						placeholder="search"
						value={props.searchInput}
						onChange={props.handleChange}
					/>
				</form>

				<IconsDiv className="icons">
					<Icon src={explore} alt="explore icon" />
					<Icon src={like} alt="like icon" />
					<Icon src={profile} alt="profile icon" />
				</IconsDiv>
			</NavSection>
		</HeaderContainer>
	);
};

SearchBar.propTypes = {
	searchInput: PropTypes.string,
	handleSearch: PropTypes.func
};
export default SearchBar;
