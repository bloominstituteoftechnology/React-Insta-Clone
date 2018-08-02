import styled from 'styled-components';

const SearchBarDiv = styled.div`
    border-top: 4px solid #E1E4E8;
    border-bottom: 1px solid #e7e7e7;
    margin-top: 15px; 
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    width: 898px;
    max-width: 100%;
    font-size: 2vw;
    font-size: 3vh;
    align-items: center;
    padding-top: 40px;
    height: 152px;
    background:white;
    @media(max-width: 500px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: space-between;
        font-size: 5vh;
        border-top: 4px solid #E1E4E8;
        border-bottom: 4px solid #E1E4E8;
        height: 275px;
    }
`;

const PostPageLogo = styled.img `
    max-width: 100%;
    width: 169px; 
    color: #FAFAFA;
    padding-Bottom: 5px;
`;
const LeftSideDiv = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 9.0vw;
    width: 175vw;
    max-width: 100%; 
    margin-left: 1vw;
    @media (max-width: 500px){
        margin-top: 0 auto;
        padding-left:  5vw;
        padding-right: 5vw;
    }
`;

const VerticalLine = styled.span `
    color: gray;
    font-size: 3vh;
`;

const SearchInput = styled.input `
    text-align:center; 
    max-width: 100%;
    width: 9vw;
    height: 4vh;
    @media(max-width: 500px){
        width:40vw;
        margin-top: 30px;
        margin-bottom: 30px;
    }
`;

const RightSideDiv = styled.div `
    margin-right: 1.87873vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 100%; 
    margin-left: 10.0vw;
    width:200vw;
    @media(max-width: 500px){
        margin: 0 auto;
    }
`;

// const Tooltipi = styled.i `

// `;

const ToolTipTextDiv = styled.div`
    visibility: hidden;
    top:0%;
    left:0%;
    position:relative;
    font-size: 1vw;
    @media(max-width: 500px){
        font-size:3vh;
    }
`

export {SearchBarDiv, PostPageLogo, LeftSideDiv, VerticalLine,
        SearchInput,RightSideDiv,ToolTipTextDiv}
