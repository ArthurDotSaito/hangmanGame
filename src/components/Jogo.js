import palavras from "../palavras";
import styled from "styled-components";

function Jogo(props){

    const renderImage = (ErrorNumber) =>(
        <StyledImageContainer className = "imageContainer">
            <StyledImage 
                src={require(`./assets/forca${ErrorNumber}.png`)} 
                data-test = "game-image"
            />
        </StyledImageContainer>
    )
    
    console.log(props.gameData.gameStatus)
    const renderSpaces = (className) => (
        <StyledHiddenWord 
            className= {className} 
            data-test="word">{props.gameData.hiddenWordArray}</StyledHiddenWord> 
    )
    
    return(
        <StyledMainContainer className="gameContainer">
            {renderImage(props.gameData.numberOfError)}
            <StyledRightContainer className="rightContainer">
                <StyledButton 
                    className="chooseWord" 
                    onClick={props.gameData.newGame} 
                    data-test="choose-word" >Escolher Palavra</StyledButton>
                {renderSpaces(props.gameData.gameStatus)}
            </StyledRightContainer>
        </StyledMainContainer>
    );  

}

const StyledMainContainer = styled.div`
    width:100%;
    display: flex;
    margin-top: 60px;
    `
const StyledImageContainer = styled.figure`
    width:50%;
`
const StyledImage = styled.img`
    width:50%;
`
const StyledRightContainer = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-right: 30px;
`
const StyledButton = styled.button`
  padding: 20px;
  background-color: #27AE60;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 20px;
  border-radius: 8px;
  width: 250px;
`

const StyledHiddenWord = styled.div.attrs(props =>({className: props.className}))`
    &.onGame{
        font-size:40px;
        color:#000000;
    }
    &.lose{
        font-size:40px;
        color:#FF0000;
    } 
    &.win{
        font-size:40px;
        color:#27AE60;
    }

` 

export default Jogo;