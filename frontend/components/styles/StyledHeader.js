import styled from 'styled-components';

const StyledHeader = styled.header`
	.bar {
		border-bottom: 10px solid ${(props) => props.theme.black};
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
		@media (max-width: 1300px) {
			grid-template-columns: 1fr;
			justify-content: center;
		}
	}
	.sub-bar {
		border-bottom: 1px solid ${(props) => props.theme.lightgrey};
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
	}
`;

export default StyledHeader;
