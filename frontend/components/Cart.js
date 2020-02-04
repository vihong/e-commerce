import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import CartStyles from './styles/CartStyles';
import CartTitleStyles from './styles/CartTitleStyles';
import CloseButton from './styles/CloseButton';
import CheckoutButton from './styles/CheckoutButton';

const LOCAL_STATE_QUERY = gql`
	query {
		cartOpen @client
	}
`;

const TOGGLE_CART_MUTATION = gql`
	mutation TOGGLE_CART_MUTATION {
		toggleCart @client
	}
`;

const Cart = () => (
	<Mutation mutation={TOGGLE_CART_MUTATION}>
		{(toggleCart) => (
			<Query query={LOCAL_STATE_QUERY}>
				{({ data }) =>
					console.log(data) || (
						<CartStyles open={data.cartOpen}>
							<header>
								<CloseButton title="close" onClick={toggleCart}>
									&times;
								</CloseButton>
								<CartTitleStyles>
									Votre commande
								</CartTitleStyles>
								<p>10 articles dans votre commande.</p>
							</header>

							<footer>
								<p>12€</p>
								<CheckoutButton>Commander</CheckoutButton>
							</footer>
						</CartStyles>
					)}
			</Query>
		)}
	</Mutation>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
