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

const Home = (props) => {
	return (
		<div>
			<SloganStyles>
				Avec OUICAR+, <br />
				<span>faites plus que Louer une voiture,</span> savourez la.
			</SloganStyles>
			<Items />
		</div>
	);
};

export default Home;
