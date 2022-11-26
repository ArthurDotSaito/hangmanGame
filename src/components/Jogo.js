import palavras from "../palavras";
import styled from "styled-components";

function Jogo(props){

    const renderImage = (number) =>(
        <StyledImageContainer className = "imageContainer">
            <StyledImage 
                src={require(`./assets/forca${number}.png`)} 
                data-test = "game-image"
            />
        </StyledImageContainer>
    )

    return(
        <StyledMainContainer className="gameContainer">
            {renderImage(props.gameData.numberOfError)}
            <StyledRightContainer className="rightContainer">
                <StyledButton 
                    className="chooseWord" 
                    onClick={props.gameData.newGame} 
                    data-test="choose-word" >Escolher Palavra</StyledButton>
                <StyledHiddenWord 
                    className="HiddenWord" 
                    data-test="word">{props.gameData.hiddenWordArray}</StyledHiddenWord>
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
const StyledHiddenWord = styled.div`
    color: black;
    font-size: 40px;

` 

export default Jogo;