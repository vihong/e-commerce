import styled from 'styled-components';

const CartTitleStyles = styled.h3`
	background: ${(props) => props.theme.greenOuiCar};
	color: white;
	display: inline-block;
	padding: 4px 5px;
	transform: skew(-3deg);
	margin: 0;
	font-size: 4rem;
`;

export default CartTitleStyles;
