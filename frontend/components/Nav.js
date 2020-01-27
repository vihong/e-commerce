import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = (props) => {
	return (
		<NavStyles>
			<Link href="/items">
				<a>Boutique en ligne</a>
			</Link>
			<Link href="/sell">
				<a>Vendre</a>
			</Link>
			<Link href="/signup">
				<a>S'inscire</a>
			</Link>
			<Link href="/orders">
				<a>Votre commande</a>
			</Link>
			<Link href="/me">
				<a>Votre compte</a>
			</Link>
		</NavStyles>
	);
};

export default Nav;
