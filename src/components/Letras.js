import React from "react";
import styled from "styled-components";

function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const letter = alfabeto.map((l) => (
        <StyledLetter
        type="button"
        disabled={(!props.letterData.gameState) ? !props.letterData.letters.includes(l) : props.letterData.letters.includes(l)}
        onClick = {({target}) => {
            props.letterData.haveLetterOnWord(l);
            target.disabled = true;
            }}
        data-test="letter">{l.toUpperCase()}
        </StyledLetter>
    ))

    return(
        <StyledLetterContainer>
            {letter}
        </StyledLetterContainer>
    )
}

const StyledLetterContainer = styled.section`
    width: 100%;
    margin-top: 100px;
`

const StyledLetter =  styled.button`
    width: 40px;
    height: 40px;
    margin: 7px;
    font-weight: 700;
    color: #7AA7C7;
    background-color: #E1ECF4;
    &:disabled{
        opacity: 0.5;
        color: #7AA7C8;
    }
`
export default Letras;