import React from "react";
import styled from "styled-components";

function Chute(props){
    return(
        <StyledGuess className = "guessContainer">
            <p>Já sei a palavra!</p>
            <StyledInputGuess 
                type = 'text'
                disabled = {!props.guessData.gameState}
                value = {props.guessData.inputGuessText}
                placeholder = "Chuta aí!"
                onChange = {(event) => props.guessData.setInputGuessText(event.target.value)}
                data-test = "guess-button"
            ></StyledInputGuess>
            <StyledGuessButton
                type='button'
                disabled = {!props.guessData.gameState}
                value = "Chutar"
                onClick = {props.guessData.endGame}
            >Chutar</StyledGuessButton>
            </StyledGuess>
    )
}

const StyledGuess = styled.section`
    width: 100%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    font-size:20px;
`
const StyledInputGuess = styled.input`
    width: 70%;
    height: 32px;
    border-radius: 7px;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.25);
    &::placeholder{
        font-size:20px;
        opacity: 0.5;
        color: #A9A9A9;
    }
`
const StyledGuessButton = styled.button`
    width:100px;
    height: 40px;
    font-size: 20px;
    font-weight: 700;
    border: 1px solid #7AA7C7;;
    border-radius: 7px;
    background-color: #E1ECF4;
    color: #7AA7C7;
    margin-left: 15px;
    &:disabled{
        opacity:0.5;
    }
`
export default Chute;