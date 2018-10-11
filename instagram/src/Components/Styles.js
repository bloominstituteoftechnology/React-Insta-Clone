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

    export {
        Instagramtext,
        Searchdiv,
        RightIcons,
        StyledP,
        CommentContainer,
        Time
    }