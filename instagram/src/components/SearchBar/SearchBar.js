import React from 'react'
import logos from '../../img/logos.png';
import search from '../../img/search.png';
import compass from '../../img/compass.png';
import heart from '../../img/heart.png';
import friend from '../../img/friend.png';
import './searchBar.css';
import styled from 'styled-components';
const Header = styled.header`
    max-width:950px;
    width:100%;
    border:gold;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    height:175px;
    margin-bottom: 50px;
`
const IconImage = styled.img`
    width:50px;
    height: 50px;
    padding-top:70px;
    
`
class SearchBar extends React.Component {

    render() {
        return (
            <Header>
                <div><img className="header" src={logos} alt="logo" /></div>
                <div>
                    <form className="form" onSubmit={(event) => { this.props.filter(event) }}>
                        <input onChange={this.props.searchHandler} type="text" value={this.props.searchInput} placeholder=" Search 🔍" />
                    </form>
                    <button onClick={(event) => { this.props.reset(event) }}>Reset</button>
                </div>
                <div className="compheartfriend">
                    <IconImage className="icons" src={compass} alt="compass" />
                    <IconImage className="icons" src={heart} alt="heart" />
                    <IconImage className="icons" src={friend} alt="friend" />
                </div>
            </Header>
        );
    }
}

export default SearchBar