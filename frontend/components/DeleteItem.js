import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_ITEMS_QUERY } from './Items';

const DELETE_ITEM_MUTATION = gql`
	mutation DELETE_ITEM_MUTATION($id: ID!) {
		deleteItem(id: $id) {
			id
		}
	}
`;

class DeleteItem extends Component {
	state = {};

	udpateInApolloCache = (cache, dataCurrentlyInDatabase) => {
		const dataCurrentlyInApollo = cache.readQuery({
			query : ALL_ITEMS_QUERY
		});
		console.log(dataCurrentlyInApollo, dataCurrentlyInDatabase);
		dataCurrentlyInApollo.items = dataCurrentlyInApollo.items.filter(
			(item) => item.id !== dataCurrentlyInDatabase.data.deleteItem.id
		);
		cache.writeQuery({
			query : ALL_ITEMS_QUERY,
			data  : dataCurrentlyInApollo
		}); // WARNING : "data" is an official database/cache keyword, don't change it.
	};
	render() {
		return (
			<Mutation
				mutation={DELETE_ITEM_MUTATION}
				variables={{ id: this.props.id }}
				update={this.udpateInApolloCache} // WARNING : "update" is an official event keyword, don't change it.
			>
				{(deleteItem, { error }) => (
					<button
						onClick={() => {
							if (
								confirm(
									'Êtes-vous sûr de vouloir supprimer cet article ?'
								)
							) {
								deleteItem();
							}
						}}
					>
						{this.props.children}
					</button>
				)}
			</Mutation>
		);
	}
}

export default DeleteItem;
