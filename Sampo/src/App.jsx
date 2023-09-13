import './App.css'
import Card from './components/Card'

const playerCard = {
  image: 'http://placekitten.com/140/120',
  stats: [{name:'scratching', value: 9}]
};

export default function App(){
  return(
    <>
    <h1>Hello world!</h1>
    <Card card = {playerCard}/>
    </>
  );
}


