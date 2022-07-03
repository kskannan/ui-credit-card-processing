import './CardList.css';
const CardList = (props) => {	
	return(
	<div className='cardList'>
		<table className="cardTable">
			<thead>
				<tr>
					<td className="tableHeader">Name</td>
					<td className="tableHeader">Card Number</td>
					<td className="tableHeader">Card Limit</td>
					<td className="tableHeader">Balance</td>
				</tr>
			</thead>
			<tbody>
				 {
						props.cardList.map((item, index) => {
						return <tr key={index}>
							<td className="cardRow">{item.name}</td>
							<td className="cardRow">{item.cardNumber}</td>
							<td className="cardRow">{item.cardLimit}</td>
							<td className="cardRow">0.00</td>
						</tr>
						})
				}
			</tbody>
		</table>
	</div>
 );
}

export default CardList;