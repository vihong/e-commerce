import styled from 'styled-components';
import { themeOuiCar } from '../components/Page.js';

const ItemsStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 60px;
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
`;

export default ItemsStyles;
