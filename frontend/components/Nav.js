import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';

const GreyLink = styled.a`
	color: lightgrey;
	pointer-events: none;
`;

const Nav = (props) => {
	return (
		<NavStyles>
			<Link href="/items">
				<a>Acheter</a>
			</Link>
			<Link href="/sell">
				<a>Vendre</a>
			</Link>
			<Link href="/signup">
				<GreyLink>S'inscrire</GreyLink>
			</Link>
			<Link href="/orders">
				<GreyLink>Mes commandes</GreyLink>
			</Link>
			<Link href="/me">
				<GreyLink>Mon compte</GreyLink>
			</Link>
			<Mutation mutation={TOGGLE_CART_MUTATION}>
				{(toggleCart) => (
					<button className="cart-button" onClick={toggleCart}>
						Mon panier &#128722;
					</button>
				)}
			</Mutation>
		</NavStyles>
	);
};

export default Nav;
