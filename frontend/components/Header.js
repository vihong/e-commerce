import Nav from './Nav';
import Link from 'next/link';
import Logo from './styles/Logo';
import StyledHeader from './styles/StyledHeader';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};
Router.onRouteChangeError = () => {
	NProgress.done();
};

const Header = () => {
	return (
		<StyledHeader>
			<div className="bar">
				<Logo>
					<Link href="/">
						<a>OuiCar+</a>
					</Link>
				</Logo>
				<Nav />
			</div>
			<div className="sub-bar">
				<p>Recherche</p>
			</div>
			<div>Panier</div>
		</StyledHeader>
	);
};

export default Header;
