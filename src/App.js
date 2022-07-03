import './App.css';
import CardForm from './components/CardForm';
import CardList from './components/CardList';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function App() {
  const [cardList, setCardList] = useState([]);
	useEffect(() => {
		Axios.get('/credit/card/get/all')
		.then(response => {
			setCardList(response.data);
		});		
	},[]);

  return (
    <div className="App">
      <CardForm cardList = {cardList} setCardList = {setCardList}/>
      <CardList cardList = {cardList}/>
    </div>
  );
}

export default App;