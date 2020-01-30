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
	state = {
		title       : 'Peluche Mélofée',
		description : 'Cette peluche porte chance',
		image       : '',
		largeImage  : '',
		price       : 1500
	};

	handleChange = (event) => {
		const { name, type, value } = event.currentTarget;
		const valueInput = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: valueInput }); // computed value property
	};

	uploadFile = async (event) => {
		console.log('uploading file...');
		const files = event.currentTarget.files;
		console.log(files);
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'onlineShopCloudinary');

		const response = await fetch(
			'https://api.cloudinary.com/v1_1/dirwtg5hx/image/upload',
			{ method: 'POST', body: data }
		);
		const file = await response.json();
		console.log(`----------`);
		console.log(file);
		this.setState({
			image      : file.secure_url,
			largeImage : file.eager[0].secure_url
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
							<label htmlFor="file">
								File
								<input
									type="file"
									id="file"
									name="file"
									placeholder="Téléchargez une image..."
									required
									onChange={this.uploadFile}
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
								Prix
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
