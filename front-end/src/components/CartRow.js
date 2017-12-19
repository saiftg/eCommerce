import React from 'react';

function CartRow(props){
	const product = props.product;
	return(
		<tr>
			<td>{product.productName}</td>
			<td>{product.buyPrice}</td>
			<td><button className="btn btn-danger">X</button></td>
		</tr>
	)
}


export default CartRow;