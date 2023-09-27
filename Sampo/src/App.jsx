import './App.css'
import Card from './components/Card'
import { useState } from 'react';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min +1) + min);

const playerCard = {
  image: 'http://placekitten.com/140/120?image=' + getRandomInt(0,15),
  stats: [{name:'scratching', value: getRandomInt(1,1000)},
          {name:'tackling', value: getRandomInt(1,1000)},
          {name:'running', value: getRandomInt(1,1000)}],
};

const opponentCard = {
  image: 'http://placekitten.com/140/120?image=' + getRandomInt(0,15), 
  stats: [{name: 'scratching', value: getRandomInt(1,1000)},
          {name: 'tackling', value: getRandomInt(1,1000)},
          {name:'running', value: getRandomInt(1,1000)}]
}

const createCard = (index) =>({
  image: 'http://placekitten.com/140/120?image=' + index,
  stats: [{name:'scratching', value: getRandomInt(1,1000)},
          {name:'tackling', value: getRandomInt(1,1000)},
          {name:'running', value: getRandomInt(1,1000)}],
  id: crypto.randomUUID()
});

const deck = Array(16).fill(null).map((_,index)=>createCard(index))

export default function App(){

  const [result, setResult] = useState('');

  function compareCards(){
    const playerStat = playerCard.stats[0];
    const opponentStat = opponentCard.stats[0];

    if(playerStat.value > opponentStat.value){
      setResult('Winner');
    }
    
    if(playerStat.value < opponentStat.value){
      setResult('Loss');
    }
    
    if(playerStat.value == opponentStat.value){
      setResult('Draw');
    }
  }

  return(
    <>
    <h1>EPIC_CARD_GAME!</h1>
    <div className='Game'>
      <Card card = {playerCard}/>

      <div className='center-area'>
        <p>{result || ''}</p>
        <button onClick={compareCards} type="button">play</button>
      </div>

      <Card card = {opponentCard}/>
    </div>
    
    </>
  );
}


