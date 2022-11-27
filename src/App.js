import React from 'react';
import Jogo from "./components/Jogo"
import Letras from './components/Letras';
import styled from 'styled-components'
import palavras from './palavras';

function App() {
  const [gameState, setGameState] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState("onGame")
  let [word, setWord] = React.useState('');
  let [numberOfError, setNumberOfError] = React.useState(0);
  let [letters, setLetters] = React.useState([]);
  let [wordArray, setWordArray] = React.useState([]);
  let [hiddenWordArray, setHiddenWordArray] = React.useState([]);

  const gameData = {
    word,
    numberOfError,
    gameState,
    wordArray,
    hiddenWordArray,
    letters,
    gameStatus,
    newGame
  }

  const letterData = {
    gameState,
    letters,
    haveLetterOnWord
  }

  function newGame() {
    setGameState(true);
    setNumberOfError(0);
    setLetters([]);
    let newWord = palavras[chooseWord()];
    (newWord === word) ? newWord = palavras[chooseWord()] : setWord(newWord);
    setWordArray(Array.from(newWord));
    setHiddenWordArray(Array.from(newWord).map((e) => e = " _ "));

    function chooseWord() {
      return Math.round(Math.random() * palavras.length - 1);
    }
  }
  console.log(word);
  console.log(wordArray);
  console.log(hiddenWordArray);

  function haveLetterOnWord(newLetter) {
    setLetters([...letters, newLetter]);
    let wordNormalized = word.normalize("NFC").replace(/[^a-zA-Z\s]/g, "");
    if (wordNormalized.includes(newLetter)) {
      rightLetters(newLetter);
    }else {
      let sumOfErrors = numberOfError + 1;
      setNumberOfError(sumOfErrors);
      endGame(hiddenWordArray, sumOfErrors)
    }

    function rightLetters(rightLetter) {
      const right = hiddenWordArray.map(function (element, index) {
        let rightLetterElement = wordArray[index].normalize("NFC").replace(/[^a-zA-Z\s]/g, "");
        return (rightLetterElement === rightLetter) ? element = wordArray[index] : element})

      setHiddenWordArray(right);
      endGame(right);
    }
  }
  console.log(numberOfError);

  function endGame(word, totalError){
    if(!word.includes(" _ ")){
      setGameStatus("win");
      setGameState(false);
      setLetters([])
    }else if(totalError == 6){
      setGameStatus("lose");
      setNumberOfError(6);
      setGameState(false);
      setLetters([]);
    }
  }


  return (
    <StyledContainer className="App">
      <Jogo gameData={gameData} />
      <Letras letterData={letterData} />
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
