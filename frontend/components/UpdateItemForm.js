import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

import FormStyles from './styles/FormStyles';
import formatMoney from '../lib/formatMoney';
import ErrorMessage from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!) {
		item(where: { id: $id }) {
			id
			title
			description
			price
			image
		}
	}
`;

const UPDATE_ITEM_MUTATION = gql`
	mutation UPDATE_ITEM_MUTATION(
		$id: ID!
		$title: String
		$description: String
		$price: Int
		$image: String # $largeImage: String
	) {
		updateItem(
			id: $id
			title: $title
			description: $description
			price: $price
			image: $image # largeImage: $largeImage
		) {
			id
			title
			description
			price
			image
		}
	}
`;

class UpdateItemForm extends Component {
	imageRef = React.createRef();

	state = {};

	handleChange = (event) => {
		const { name, type, value } = event.currentTarget;
		const valueInput = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: valueInput }); // computed value property
	};

	uploadFile = () => {
		console.log('uploading file...');
		this.setState({
			image      : this.imageRef.current.value,
			largeImage : this.imageRef.current.value
		});
	};

	updateItem = async (event, updateItemMutation) => {
		event.preventDefault();
		console.log('Updating Item!!');
		console.log(this.state);
		const response = await updateItemMutation({
			variables : {
				id : this.props.id,
				...this.state
			}
		});
		console.log('Updated');
	};

	render() {
		return (
			<Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
				{({ data, loading }) => {
					if (loading) return <p>Chargement du formulaire edit...</p>;
					if (!data.item)
						return (
							<p>
								Aucun article trouvé pour l'ID "{this.props.id}"
							</p>
						);
					return (
						<Mutation
							mutation={UPDATE_ITEM_MUTATION}
							variables={this.state}
						>
							{(updateItem, { loading, error }) => (
								<FormStyles
									onSubmit={(event) =>
										this.updateItem(event, updateItem)}
								>
									<ErrorMessage error={error} />
									<fieldset
										disabled={loading}
										aria-busy={loading}
									>
										<label htmlFor="image">
											File
											<input
												type="text"
												id="file"
												name="image"
												placeholder="URL directe d'une image..."
												required
												onChange={this.uploadFile}
												ref={this.imageRef}
											/>
											{data.item.image ? (
												<img
													src={data.item.image}
													alt="Upload preview"
													width="200"
												/>
											) : null}
										</label>

										<label htmlFor="title">
											Title
											<input
												type="text"
												id="title"
												name="title"
												placeholder="Votre produit..."
												required
												defaultValue={data.item.title}
												onChange={this.handleChange}
											/>
										</label>

										<label htmlFor="price">
											Prix (ex: tapez '1500' pour 15€)
											<input
												type="number"
												id="price"
												name="price"
												placeholder="Votre prix..."
												required
												defaultValue={data.item.price}
												onChange={this.handleChange}
											/>
										</label>

										<label htmlFor="description">
											Description
											<textarea
												type="text"
												id="description"
												name="description"
												placeholder="Expliquez comment votre produit est génial..."
												required
												defaultValue={
													data.item.description
												}
												onChange={this.handleChange}
											/>
										</label>

										<button type="submit">
											{loading ? (
												'Enregistrement'
											) : (
												'Enregistrez vos modifications'
											)}
										</button>
									</fieldset>
								</FormStyles>
							)}
						</Mutation>
					);
				}}
			</Query>
		);
	}
}

export default UpdateItemForm;
export { UPDATE_ITEM_MUTATION };
