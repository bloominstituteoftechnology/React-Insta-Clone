import React from 'react';
import insta from './insta.png';
import square from './square.png';
import person from './person.jpg';
import compas from './compas.png';
import h from './h.png';

import styled from 'styled-components';


const LogOut = styled.div`
	margin-top: 15px;
`;

const LogOutBTN = styled.div`
	border: solid black 1px;
	display: inline block;
	width:50px;
	text-align: center;
	margin-top: 15px;
	padding: .5%;
	&:hover {
	  background-color: black;
		color: white;
		cursor: pointer;
  }
`;

const LogosMain = styled.div`
	display:flex;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 10px;
	width: 100%;
`;

const Logos = styled.div`
	display:flex;
	align-items: center;
`;

const Logos2 = styled.div`
	display:flex;
	align-items: center;
	justify-content: flex-end;
`;

const SearchHR1 = styled.hr`
	margin-bottom: 15px;
	margin-top: 12px;
`;

const SearchHR2 = styled.hr`
	border: solid lightgrey 2px;
	margin-bottom: 10px;
`;

const LogoInput = styled.input`
	text-align: center;
	padding: .2%;
	font-size:1.2rem;
	color: grey;
`;

const LogoImages = styled.img`
	width: 10%;
	margin: 0 2%;
`;

const LogoHr = styled.hr`
	height: 15px;
	margin: 0 5%;
`;

const MainLogo = styled.img`
	width: 35%;
`;

const Square = styled.img`
	width: 10%;
`;

const SearchBar = (props) => {
	return (
		<div>
			<LogOut>
				<p>Welcome - {Object.keys(localStorage)}</p>
				<LogOutBTN onClick={()=>{localStorage.clear();window.location.reload()}}>Log Out</LogOutBTN>
			</LogOut>
			<LogosMain>
				<Logos>
					<Square src={square} alt={"logo-icon"} />
					<LogoHr/>
					<MainLogo src={insta} alt={"instagram"} />
				</Logos>
				<form onSubmit={props.searchPosts}>
					<LogoInput onChange={props.handleInput} placeholder="Search" value={props.input} />
				</form>
				<Logos2>
					<LogoImages src={compas} alt="compas"/>
					<LogoImages src={h} alt="heart"/>
					<LogoImages src={person} alt="person"/>
				</Logos2>
			</LogosMain>
			<SearchHR1/>
			<SearchHR2/>
		</div>
	)
}

export default SearchBar;