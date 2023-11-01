import './App.css'
import Card from './components/Card'
import { useState } from 'react';
import PlayButton from './components/PlayButton';

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
const half = Math.ceil(deck.length /2);
const dealCards = () =>{
  shuffle(deck);
  return{
    player: deck.slice(0,half),
    opponent: deck.slice(half)
  }
}

function shuffle(array){
  for(let i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function App(){

  const [result, setResult] = useState('');
  const [cards, setCards] = useState(dealCards)
  const[gameState, setGameState] = useState('play');

  function compareCards(){
    const playerStat = cards.player[0].stats[0];
    const opponentStat = cards.opponent[0].stats[0];

    if(playerStat.value > opponentStat.value){
      setResult('Winner');
    }
    
    if(playerStat.value < opponentStat.value){
      setResult('Loss');
    }
    
    if(playerStat.value == opponentStat.value){
      setResult('Draw');
    }
    setGameState('result');
  }

  function nextRound(){
    
  }

  return(
    <>
    <h1>EPIC_CARD_GAME!</h1>
    <div className='Game'>
      <div className='hand player'>
        <ul className='card-list'>
          {cards.player.map((pCard,index) =>(
            <li className='card-list-item-player' key={pCard.id}>
              <Card card = { index === 0 ? pCard : null}/>
            </li>
          ))}
        </ul>
      </div>
      
      <div className='center-area'>
        <p>{result || ''}</p>
        {
          gameState === 'play' ? (<PlayButton text={'Play'} handleClick={compareCards}/>) : (<PlayButton text={'Next'} handleClick={nextRound}/>)
        }
        
      </div>

      <div className='hand opponent'>
        <ul className='card-list opponent'>
          {cards.opponent.map(oCard =>(
           <li className='card-list-item-opponent' key={oCard.id}>
             <Card card = {oCard}/>
            </li>
           ))}
          </ul>
       </div>
       {console.log(deck)}
    </div>
    </>
  );
}


