import Nav from './Nav';
import Link from 'next/link';
import Logo from './styles/Logo';
import StyledHeader from './styles/StyledHeader';

const Header = () => {
	return (
		<StyledHeader>
			<div className="bar">
				<Logo>
					<Link href="/">
						<a>YesCar</a>
					</Link>
				</Logo>
				<Nav />
			</div>
			<div className="sub-bar">
				<p>Search</p>
			</div>
			<div>Cart</div>
		</StyledHeader>
	);
};

export default Header;
