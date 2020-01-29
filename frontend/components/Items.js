import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

const ALL_ITEMS_QUERY = gql`
	query ALL_ITEMS_QUERY {
		items {
			id
			title
			price
			description
			image
			largeImage
		}
	}
`;
// We use "Render props" to us the query response

const SectionStyles = styled.section`text-align: center;`; // that'll do for now but this needs to be changed

const ItemsStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 60px;
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
`;

class Items extends Component {
	displayItemsFromQuery = (data, loading, error) => {
		if (loading) return <p>Chargement...</p>;
		if (error) return <p>Error: {error.message}</p>;
		return (
			<ItemsStyles>
				{data.items.map((item) => <Item item={item} key={item.id} />)}
			</ItemsStyles>
		);
	};

	render() {
		return (
			<SectionStyles>
				<Query query={ALL_ITEMS_QUERY}>
					{({ data, loading, error }) =>
						this.displayItemsFromQuery(data, loading, error)}
				</Query>
			</SectionStyles>
		);
	}
}

export default Items;
