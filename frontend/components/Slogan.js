import React from 'react';
import styled from 'styled-components';

const Slogan = () => {
	return <SloganStyles>En plus de louer une voiture</SloganStyles>;
};

const SloganStyles = styled.h1`
	font-size: 35px;
	font-weight: 600;
	display: inline-block;
	margin-right: auto;
	margin-top: auto;
	margin-left: 4rem;
	position: relative;
	bottom: 13rem;
	text-align: center;
	color: white;
	text-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
`;

export default Slogan;
