import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const CallToActionButton = () => {
	return (
		<div>
			<Link href="/sell">
				<ButtonStyles>OuiCar+</ButtonStyles>
			</Link>
		</div>
	);
};

const ButtonStyles = styled.a`
	background: transparent;
	color: ${(props) => props.theme.greenOuiCar};
	border: 1px solid ${(props) => props.theme.greenOuiCar};
	font-size: 1.7rem;
	padding: 0.2rem 1.5rem;
	border-radius: 5px;
	display: block;
	:hover {
		color: pink;
	}
`;

export default CallToActionButton;
