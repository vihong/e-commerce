import React from 'react';
import CartStyles from './styles/CartStyles';
import CartTitleStyles from './styles/CartTitleStyles';
import CloseButton from './styles/CloseButton';
import CheckoutButton from './styles/CheckoutButton';

const Cart = () => {
	return (
		<CartStyles open={true}>
			<header>
				<CloseButton title="close">&times;</CloseButton>
				<CartTitleStyles>Your Cart</CartTitleStyles>
				<p>You have __ items in your cart.</p>
			</header>

			<footer>
				<p>10€</p>
				<CheckoutButton>Checkout</CheckoutButton>
			</footer>
		</CartStyles>
	);
};

export default Cart;
