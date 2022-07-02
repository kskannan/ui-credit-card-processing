import React  from "react";
import './CardForm.css'

const CardForm = () => {
	return (
		<div className="cardForm">
			<div className="field">
				<label>Name:
					<input type="text" name="name" className="text"/>	
				</label>
			</div>
			<div className="field">
				<label>Card Number:
					<input type="text" name="cardNumber" className="text"/>	
				</label>
			</div>
			<div className="field">
				<label>Card Limit:
					<input type="text" name="cardLimit" className="text"/>	
				</label>
			</div>
			
			<div className="field">
				<input type="submit" value="Submit" className="button"/>
			</div>
		</div>
	);
}

export default CardForm;