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
            <section className="chooseWordContainer">
                <StyledButton className="chooseWord" data-test="choose-word" onClick={props.gameData.newGame}>Escolher Palavra</StyledButton>
                <h1 className={props.gameData.classPalavra} data-test="word" data-answer={props.gameData.palavra}>{props.gameData.palavraEscondida}</h1>
            </section>
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
const StyledButton = styled.button`
  padding: 20px;
  background-color: #27ae60;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 20px;
  border-radius: 8px;
  width: 250px;
`
export default Jogo;