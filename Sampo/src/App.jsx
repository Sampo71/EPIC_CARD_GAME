import './App.css'
import Card from './components/Card'

const playerCard = {
  image: 'http://placekitten.com/140/120',
  stats: [{name:'scratching', value: 9},
          {name:'tackling', value: 5},
          {name:'running', value: 8}]
};

const opponentCard = {
  image: 'http://placekitten.com/140/120?image=2', 
  stats: [{name: 'scratching', value: 8},
          {name: 'tackling', value: 4},
          {name:'running', value: 4}]
}

export default function App(){

  function compareCards(){
    const playerStat = playerCard.stats[0];
    const opponentStat = opponentCard.stats[0];

    let result = '';

    if(playerStat.value > opponentStat.value){
      result = 'winner';
    }
    
    if(playerStat.value < opponentStat.value){
      result = 'loss';
    }

    if(playerStat.value == opponentStat.value){
      result = 'draw';
    }

    console.log(result)
  }

  return(
    <>
    <h1>Hello world!</h1>
    <Card card = {playerCard}/>
    <button onClick={compareCards} type="button">play</button>
    <Card card = {opponentCard}/>
    </>
  );
}


