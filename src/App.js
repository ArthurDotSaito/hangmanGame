import React from 'react';
import Jogo from "./components/Jogo"
import styled from 'styled-components'
import palavras from './palavras';

function App() {
  const [gameState, setGameState] = React.useState(false);
  let [word,setWord] = React.useState('');
  let [numberOfError, setNumberOfError] = React.useState(0);
  const [letters, setLetters] = React.useState([]);
  let [wordArray, setWordArray] = React.useState([]);
  let [hiddenWordArray, setHiddenWordArray] = React.useState([]);

  const gameData = {
    word,
    numberOfError,
    gameState,
    wordArray,
    hiddenWordArray,
    letters,
    newGame
  }

  function newGame(){ 
    setGameState(true);
    setNumberOfError(0);
    setLetters([]);
    let newWord = palavras[chooseWord()];
    (newWord === word) ? newWord = palavras[chooseWord()] : setWord(newWord);
    setWordArray(Array.from(newWord));
    setHiddenWordArray(Array.from(newWord).map((e) => e = " _ "));

    function chooseWord(){
      return Math.round(Math.random() * palavras.length -1);
    }
  }
  console.log(word);
  console.log(wordArray);
  console.log(hiddenWordArray);    

  return(
    <StyledContainer className="App">
      <Jogo gameData={gameData} />
    </StyledContainer>
);

}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export default App;
