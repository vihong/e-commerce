import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ErrorMessage from './ErrorMessage';
import SingleItemStyles from './styles/SingleItemStyles';
import Head from 'next/head'; // add "side effect" in next.js with Head

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!) {
		item(where: { id: $id }) {
			id
			title
			description
			image
		}
	}
`;

class SingleItem extends Component {
	state = {};
	render() {
		return (
			<Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
				{({ error, loading, data }) => {
					if (error) return <Error error={error} />;
					if (loading) return <p>Chargement de votre article.</p>;
					if (!data.item)
						return <b>No Item Found for {this.props.id}</b>;
					const itemAdded = data.item;
					return (
						<SingleItemStyles>
							<Head>
								<title>OnlineStore | {itemAdded.title} </title>
							</Head>
							<img src={itemAdded.image} alt={itemAdded.title} />
							<div className="details">
								<h2>Viewing {itemAdded.title} </h2>
								<p>{itemAdded.description}</p>
							</div>
						</SingleItemStyles>
					);
				}}
			</Query>
		);
	}
}

export default SingleItem;
