import React from 'react';

function ProductRow(props){
	console.log(props.token);
	const product = props.product;

	if(props.token === undefined){
		var button = "";

	}else{
		 button = <button
						className="btn btn-primary"
						onClick={()=>{
							props.addToCart(props.token,product.productCode)
						}}
						>Add to Cart</button>
	}

	if(product.quantityInStock  > 100){
		var inStockClass = ""
		var inStock = "In Stock"
	}else if(product.quantityInStock > 0){
		 inStockClass = "bg warning"
		 inStock = "Order Soon"

	}else{
		 inStockClass = "bg-danger"
		 inStock = "Out of Stock"
	}

	return(
		<tr>
			<td>{product.productName}</td>
			<td>{product.productScale}</td>
			<td>{product.productVendor}</td>
			<td>{product.productDescription}</td>
			<td className={inStockClass}>{inStock}</td>
			<td>{product.buyPrice}</td>
			<td>{product.MSRP}</td>
			<td>{button}</td>
		</tr>
		)
};

export default ProductRow;