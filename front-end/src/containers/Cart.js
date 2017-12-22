import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GetCart from '../actions/GetCart';
import { Link } from 'react-router-dom';
import CartRow from '../components/CartRow';
import axios from 'axios';

class Cart extends Component{
	constructor(){
		super();
		this.makePayment = this.makePayment.bind(this);
	}


	makePayment() {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_fYvQxqHuJ4sVneTkAiLJsoB1',
            locale: 'auto',
            image: 'http://www.digitalcrafts.com/sites/all/themes/digitalcrafts/images/digitalcrafts-site-logo.png',
            token: (token) => {
                var theData = {
                    amount: this.props.cart.totalPrice * 100,
                    stripeToken: token.id,
                    userToken: this.props.auth.token,
                }
                axios({
                    method: 'POST',
                    url: `${window.apiHost}/stripe`,
                    data: theData
                }).then((data) => {
                    console.log(data);
                    if (data.msg === 'paymentSuccess') {

                    }
                });
            }
        });
        handler.open({
            name: "Pay Now",
            description: 'All yo $$$',
            amount: this.props.cart.totalPrice * 100
        })
    }



	componentDidMount(){
		console.log(this.props.auth);
		if(this.props.auth.token === undefined){
			// if the user has no token... they should not be here. Goodbye.
			// this.props.history.push('/login')
		}else{
			// the user does have a token, go get their cart!
			this.props.getCart(this.props.auth.token);
		}
	}

	render(){
		console.log(this.props.cart);
		if(!this.props.cart.totalItems){
			// if this return occurs, the render is DONE
			return(
				<div>
					<h3>Your cart is empty! Get shopping or <Link to="/Classicmodels/login">login</Link></h3>
				</div>
			)
		}else{
			var cartArray = this.props.cart.products.map((product,index)=>{
				console.log(product)
				return (
					<CartRow key={index} product={product} />
					)
			})
			return(
				<div>
				<h2>Your order total is: ${this.props.cart.totalPrice} - <button className='btn btn-primary'onClick={this.makePayment}>Pay Now</button></h2>
					<table className="table table-striped">
					<thead>
						<tr>
							<th>Product</th>
							<th>Price</th>
							<th>Remove</th>

						</tr>
					</thead>
					<tbody>
					{cartArray}
					</tbody>
					
					</table>
					
				</div>
			)
		}
	}
}

function mapStateToProps(state){
	return{
		auth: state.auth,
		cart: state.cart
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getCart: GetCart
	},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
