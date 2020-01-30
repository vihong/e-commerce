import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import styled from 'styled-components';

const GreyLink = styled.a`color: lightgrey;`;

const Nav = (props) => {
	return (
		<NavStyles>
			<Link href="/items">
				<a>Articles</a>
			</Link>
			<Link href="/sell">
				<a>Vendre</a>
			</Link>
			<Link href="/signup">
				<GreyLink>S'inscrire</GreyLink>
			</Link>
			<Link href="/orders">
				<GreyLink>Votre commande</GreyLink>
			</Link>
			<Link href="/me">
				<GreyLink>Votre compte</GreyLink>
			</Link>
		</NavStyles>
	);
};

export default Nav;
