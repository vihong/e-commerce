import React from 'react';
import styled from 'styled-components';
import Slogan from './Slogan';
import CallToAction from './CallToAction';

const Showcase = () => {
	return (
		<div>
			<ShowcaseStyles>
				<Slogan />
				<CallToAction />
			</ShowcaseStyles>
		</div>
	);
};

const ShowcaseStyles = styled.div`
	background-image: url(https://images.pexels.com/photos/769892/pexels-photo-769892.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
	background-position: center;
	background-size: cover;
	height: 70vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	bottom: 11px;
`;

export default Showcase;
