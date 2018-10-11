import styled from 'styled-components'

let Instagramtext = styled.p`
    font-size: 24px;
    font-family: cursive;
    font-weight: bold;
    `
    let Searchdiv = styled.div`
    border-bottom: 1px solid lightgray;
    display: flex;
    height: 75px;
    justify-content: space-between;
    `
    let RightIcons = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    `
    const StyledP = styled.p`
    width: 80%;
    margin: 10px 90px;
   display: flex;
   font-weight: bold;
    `
    const CommentContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    text-align: left;
    `
    const Time = styled.div`
    width: 80%;
    margin: 0 83px;
    text-align: left;
    margin-top: 5px;
    padding: 10px;
    color: darkgray;
    font-size: 12px;
    margin-bottom: 5px;
    border-bottom: 1px solid lightgray;
    `
    const Images = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    margin: 0 auto;
    `
    const Thumbnail = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    align-self: flex-start;
    margin-left: 15px;
    margin-bottom: 15px;
    margin-top: 15px;
    `
    const Username = styled.p`
    align-self: center;
    margin-left: 10px;
    font-weight: bold;
    `
    const Top = styled.div`
    display: flex;
    width: 90%;
    `
    const SearchInput = styled.input`
    width: 23%;
    height: 20px;
    padding: 10px;
    text-align: center;
    border: 1px solid lightgray;
   margin-top: 25px;
   background: whitesmoke;
   font-size: 14px;
    `
    const SearchLeft = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-between;
    align-items: center;
    `
    const InputBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    `
    const Inputs = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    `
    const MyIcons = styled.div`
    width: 80%;
    margin: 10px 85px;
    display: flex;
    `
    const IconsSmall = styled.div`
    width: 13%;
    display: flex;
    justify-content: space-between;
    `

    export {
        Instagramtext,
        Searchdiv,
        RightIcons,
        StyledP,
        CommentContainer,
        Time,
        Images,
        Thumbnail,
        Username,
        Top,
        SearchInput,
        SearchLeft,
        InputBox,
        Inputs,
        MyIcons,
        IconsSmall
    }