import Link from 'next/link';
import Items from '../components/Items';
import styled from 'styled-components';
import Slogan from '../components/Slogan';
import Showcase from '../components/Showcase';

const Home = (props) => {
	return (
		<div>
			<Showcase />
			<Items />
		</div>
	);
};

export default Home;
