import Link from 'next/link';
import Items from '../components/Items';
import styled from 'styled-components';

const SloganStyles = styled.h1`
	margin: 2rem auto 5rem;
	text-align: center;
	color: ${(props) => props.theme.greenOuiCar};
	line-height: 150%;
	span {
		color: ${(props) => props.theme.black};
	}
`;

const CallToActionStyles = styled.p`
	background: ${(props) => props.theme.greenOuiCar};
	display: inline-block;
	color: white;
	padding: 0.8rem 2rem;
	transform: rotate(-3deg);
	position: relative;
	bottom: 2rem;
`;

const Home = (props) => {
	return (
		<div>
			<SloganStyles>
				Avec OUICAR+,<br />
				<span>faites plus que louer une voiture</span>
				<br />
				<CallToActionStyles>
					... améliorez l'expérience !
				</CallToActionStyles>
			</SloganStyles>
			<Items />
		</div>
	);
};

export default Home;
