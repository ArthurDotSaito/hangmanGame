import React from 'react';
import Jogo from "./components/Jogo";
import Letras from './components/Letras';
import Chute from './components/Chute';
import palavras from './palavras';
import styled from 'styled-components';

function App() {
  const [gameState, setGameState] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState("onGame");
  const [word, setWord] = React.useState('');
  const [numberOfError, setNumberOfError] = React.useState(0);
  const [letters, setLetters] = React.useState([]);
  const [wordArray, setWordArray] = React.useState([]);
  const [hiddenWordArray, setHiddenWordArray] = React.useState([]);
  const [inputGuessText, setInputGuessText] = React.useState("");
  const maxError = 6;

  const gameData = {
    word,
    numberOfError,
    gameState,
    wordArray,
    hiddenWordArray,
    letters,
    gameStatus,
    newGame
  };

  const letterData = {
    gameState,
    letters,
    haveLetterOnWord
  };

  const guessData = {
    gameState,
    inputGuessText,
    setInputGuessText,
    guessEndGame
  };

  function newGame() {
    setGameState(true);
    setNumberOfError(0);
    setLetters([]);
    setGameStatus("onGame");
    const newWord = palavras[chooseWord()];
    setWord(newWord);
    setWordArray(Array.from(newWord));
    setHiddenWordArray(Array.from(newWord).map(() =>  " _ "));

    function chooseWord() {
      return Math.round(Math.random() * palavras.length - 1);
    }
  }

  function haveLetterOnWord(newLetter) {
    setLetters([...letters, newLetter]);
    const wordNormalized = word.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
    if (wordNormalized.includes(newLetter)) {
      rightLetters(newLetter);
    }else {
      const sumOfErrors = numberOfError + 1;
      setNumberOfError(sumOfErrors);
      endGame(hiddenWordArray, sumOfErrors);
    }

    function rightLetters(rightLetter) {
      const right = hiddenWordArray.map(function (element, index) {
        const rightLetterElement = wordArray[index].normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
        return (rightLetterElement === rightLetter) ? wordArray[index] : element});

      setHiddenWordArray(right);
      endGame(right);
    }
  }

  function endGame(word, totalError){
    console.log(word);
    if(!word.includes(" _ ")){
      setGameStatus("win");
      setGameState(false);
      setHiddenWordArray(word);
      setLetters([]);
    }else if(totalError === maxError){
      setGameStatus("lose");
      setNumberOfError(maxError);
      setGameState(false);
      setHiddenWordArray(word);
      setLetters([]);
    }
  }

  function guessEndGame(){
    if(inputGuessText === word.normalize("NFD").replace(/[^a-zA-Z\s]/g, "")){
      setGameStatus("win");
      setGameState(false);
      setLetters([]);
    }else{
      setGameStatus("lose");
      setNumberOfError(maxError);
      setGameState(false);
      setLetters([]);
    }
  }

  return (
    <StyledContainer className="App">
      <Jogo gameData={gameData} />
      <Letras letterData={letterData} />
      <Chute guessData={guessData}/>
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
