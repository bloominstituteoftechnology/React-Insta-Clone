import React from 'react'
import logos from '../../img/logos.png';
import compass from '../../img/compass.png';
import heart from '../../img/heart.png';
import friend from '../../img/friend.png';
import styled from 'styled-components';
const Header = styled.header`
    max-width:950px;
    width:100%;
    border:gold;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    height:175px;
    margin-bottom: 70px;
`
const IconImage = styled.img`
  width:50px;
  height:50px;
  margin-top:70px;
    
`
const CompheartFriend = styled.div`
    display:flex;
    align-items:center;
`
const Form = styled.form`
margin-top:120px;
`
class SearchBar extends React.Component {

    render() {
        return (
            <Header>
                <div><img  src={logos} alt="logo" /></div>
                <div>
                    <Form onSubmit={(event) => { this.props.filter(event) }}>
                        <input onChange={this.props.searchHandler} type="text" value={this.props.searchInput} placeholder=" Search 🔍" />
                    </Form>
                    <button onClick={(event) => { this.props.reset(event) }}>Reset</button>
                </div>
                <CompheartFriend>
                    <IconImage src={compass} alt="compass" />
                    <IconImage src={heart} alt="heart" />
                    <IconImage src={friend} alt="friend" />
                </CompheartFriend>
            </Header>
        );
    }
}

export default SearchBar