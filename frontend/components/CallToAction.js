import React from 'react';
import styled from 'styled-components';

const CallToAction = () => {
	return (
		<CallToActionStyles>Louez des accessoires annexes !</CallToActionStyles>
	);
};

const CallToActionStyles = styled.p`
	font-size: 25px;
	background: ${(props) => props.theme.greenOuiCar};
	margin-right: auto;
	margin-left: 4rem;
	position: relative;
	bottom: 16rem;
	display: inline-block;
	color: white;
	padding: 0.8rem 2rem;
	transform: rotate(-3deg);
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default CallToAction;
