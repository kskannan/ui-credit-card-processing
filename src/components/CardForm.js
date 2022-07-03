import React, {useState}  from "react";
import './CardForm.css'
import Axios from "axios";

const CardForm = (props) => {
	const card = {
		name:"",
		cardNumber:"",
		cardLimit:""
	}
const [name, setName] = useState('');
const [cardNumber, setCardNumber] = useState('');
const [cardLimit, setCardLimit] = useState('');
const [error, setError] = useState('');

const handleCardSubmit = (event) => {
    event.preventDefault();
	card.name = name;
	card.cardNumber = cardNumber;
	card.cardLimit = cardLimit;
	const headers = {
		'Content-Type': 'application/json'
	  }
	Axios.post('/credit/card/add', card, {headers: headers})
	.then(response => {
		setError(null);
		var lists = props.cardList.slice();
		lists.push(response.data);
		props.setCardList(
			lists
		);
	})
	.catch(err => {
		setError(err.response.data.message);
	});
  }

	return (
		<div className="cardForm">
			<div className="heading"><h2>Credit Card System</h2></div>
			<form>
			<div className="field">
				<label>Name:
					<input type="text" name="name" className="text"
					onChange={(e) => setName(e.target.value)} />	
				</label>
			</div>
			<div className="field">
				<label>Card Number:
					<input type="text" name="cardNumber" className="text"
					onChange={(e) => setCardNumber(e.target.value)}/>	
					<span className="invalid">{error}</span>
				</label>
				
			</div>
			
			<div className="field">
				<label>Card Limit:
					<input type="text" name="cardLimit" className="text"
					onChange={(e) => setCardLimit(e.target.value)}/>	
				</label>
			</div>
			
			<div className="field">
				<input type="submit" value="Submit" className="button"
				onClick={handleCardSubmit}
				/>
			</div>
			</form>
		</div>
	);
}
export default CardForm;