import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

import FormStyles from './styles/FormStyles';
import formatMoney from '../lib/formatMoney';
import ErrorMessage from './ErrorMessage';

const CREATE_ITEM_MUTATION = gql`
	mutation CREATE_ITEM_MUTATION(
		$title: String!
		$description: String!
		$price: Int!
		$image: String
		$largeImage: String
	) {
		createItem(
			title: $title
			description: $description
			price: $price
			image: $image
			largeImage: $largeImage
		) {
			id
		}
	}
`;

class CreateItemForm extends Component {
	imageRef = React.createRef();

	state = {
		title       : '',
		description : '',
		image       : '',
		largeImage  : '',
		price       : 0
	};

	handleChange = (event) => {
		const { name, type, value } = event.currentTarget;
		const valueInput = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: valueInput }); // computed value property
	};

	uploadFile = () => {
		console.log('uploading file...');
		console.log(this.imageRef.current.value);
		this.setState({
			image      : this.imageRef.current.value,
			largeImage : this.imageRef.current.value
		});
	};
	render() {
		return (
			<Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
				{(createItem, { loading, error }) => (
					<FormStyles
						onSubmit={async (event) => {
							event.preventDefault();
							const response = await createItem();
							console.log(response);
							Router.push({
								pathname : '/item',
								query    : { id: response.data.createItem.id }
							});
						}}
					>
						<ErrorMessage error={error} />
						<fieldset disabled={loading} aria-busy={loading}>
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
								{this.state.image ? (
									<img
										src={this.state.image}
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
									value={this.state.title}
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
									value={this.state.price}
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
									value={this.state.description}
									onChange={this.handleChange}
								/>
							</label>

							<button type="submit">Ajouter +</button>
						</fieldset>
					</FormStyles>
				)}
			</Mutation>
		);
	}
}

export default CreateItemForm;
export { CREATE_ITEM_MUTATION };
