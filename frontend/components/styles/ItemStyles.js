import styled from 'styled-components';

const Item = styled.div`
	background: white;
	border: 1px solid ${(props) => props.theme.offWhite};
	box-shadow: ${(props) => props.theme.bs};
	position: relative;
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
	img {
		width: 50%;
		height: 250px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		font-weight: 300;
		flex-grow: 1;
		padding: 0 3rem;
		font-size: 2rem;
	}
	.buttonList {
		display: grid;
		width: 100%;
		border-top: 1px solid ${(props) => props.theme.lightgrey};
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		grid-gap: 1px;
		background: ${(props) => props.theme.lightgrey};
		& > * {
			background: white;
			border: 0;
			font-size: 1rem;
			padding: 1rem;
		}
	}
	:hover {
		transform: scale(1.02);
		transition: 0.2s ease;
		box-shadow: 0 6px 6px 0 rgba(168, 182, 191, .8);
	}
`;

export default Item;
