import Link from 'next/link';

const Nav = (props) => {
	return (
		<div>
			<Link href="/sell">
				<a>Sell</a>
			</Link>
			<Link href="/">
				<a>Back to Home</a>
			</Link>
		</div>
	);
};

export default Nav;
