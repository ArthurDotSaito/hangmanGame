import React from 'react';
import Jogo from "./components/Jogo"
import Letras from './components/Letras';
import styled from 'styled-components'
import palavras from './palavras';

function App() {
  const [gameState, setGameState] = React.useState(false);
  let [word,setWord] = React.useState('');
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
    newGame
  }

  const letterData = {
    gameState,
    letters,
    haveLetterOnWord
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

  function haveLetterOnWord(newLetter){
    setLetters([...letters, newLetter]);
    let wordNormalized = word.normalize("NFC").replace(/[^a-zA-Z\s]/g, "");
    if(wordNormalized.includes(newLetter)){
      console.log("Certo!");
    }else{
      let sumOfErrors = numberOfError + 1;
      setNumberOfError(sumOfErrors);
    }
  }

  return(
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
