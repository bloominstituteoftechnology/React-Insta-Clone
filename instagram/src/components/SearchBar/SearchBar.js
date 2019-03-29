import React from 'react'
import './SearchBar.scss';
import styled from 'styled-components'
import {Button} from "../Styles/Reusables/Button";
import {Icon} from "../Styles/Reusables/Icon";
import {Input} from "../Styles/Reusables/Input";

const Header = styled.header`
	  padding: 20px 0;
	  display:flex;
	  justify-content: space-between;
	  align-items:center;
	  height: 100px;
`

const LogoHeader = styled.div`
    display: flex;
    height: 100%;
    align-items:center;
`

const LogoButton = styled(Button)`
      margin-left: 0;
      & > i{
		  font-size: 3rem;
	  }
`
const LogoImage = styled.img`
    max-width: 100%;
    border-left: 1px solid #444;
    padding-left:10px;
    height: 90%;
`

const SearchInputContainer = styled.div`
    padding: 20px;
    position: relative;
    width: 60%;
`

const SearchInput = styled(Input)`
    width: 100%;
`

const SearchButton = styled(Button)`
	position: absolute;
  	right: 20px;
  	top: 35px;
`
const RightDiv = styled.div`
	 i{
	   margin-left: 14px;
	 }
`


class SearchBar extends React.Component{
	constructor(props){
		super(props)
		this.state={
			query: ''
		}
	}
	onQueryChange = (e)=>{
		const val = e.trim()
		this.setState({query: val})
		this.props.onQueryChange(val)
	}
	
	onSearchPost = (e)=>{
		e.preventDefault()
		this.props.onSearchPost(e, this.state.query)
		this.setState({query: ''})
	}
	
	render(){
		return (
			 <Header >
				<LogoHeader >
					<LogoButton><Icon className="fab fa-instagram" /></LogoButton>
					<LogoImage src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/>
				</LogoHeader>
				<SearchInputContainer >
					<SearchInput type="text"
						className="searchInput"
						placeholder="Search"
						onChange={(e)=> this.onQueryChange(e.target.value)}
						/>
					<SearchButton className="searchButton" onClick={e => this.onSearchPost(e)}>
						<Icon className="fas fa-search"/>
					</SearchButton>›
				</SearchInputContainer>
				<RightDiv className="right">
					<Button className=""><Icon className="fab fa-instagram"/></Button>
					<Button className=""><Icon className=" far fa-heart"/></Button>
					<Button className="logoutButton"
							onClick={this.props.onLogout}>
						<Icon className="fas fa-user-friends"/>Logout</Button>
				</RightDiv>
			</Header>
		)
	}
}

export default SearchBar

