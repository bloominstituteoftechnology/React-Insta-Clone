import React from 'react';
import  styled  from 'styled-components';

const DivOne = styled.div`
    border-bottom: 1px solid #d3d3d3;
    display: flex;
    height: 75px;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 55%;
    height: 30px;
    padding: 10px;
    text-align: center;
    border: 1px solid #d3d3d3;
    margin-top: 25px;
    margin-left: 10%;
    margin-right: 2%;
    background: #f5f5f5;
    font-size: 14px;
`;


const DivTwo = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-between;
    align-items: center;
`;

const DivThree = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Line = styled.p`
    font-size: 24px;
    margin-right: 10px;
`;

const Border = styled.p`
    font-size: 24px;
    font-family: cursive;
    font-weight: bold;
`;



const SearchBar = (props) => {
    return (
        <DivOne>
            <DivTwo>
                <i className="fa fa-instagram fa-2x" />
                <Line>|</Line>
                <Border> Instagram</Border>
            </DivTwo>
            <Input
                placeholder="Search"
                type="text"
                value={props.filterTarget}
                onChange={props.changeHandler}
                name="filterTarget"></Input>
            <DivThree>
                <i className="fa fa-compass fa-2x" />
                <i className="fa fa-heart fa-2x" />
                <i className="fa fa-user fa-2x" />
            </DivThree>
        </DivOne>
    );
};

export default SearchBar;
