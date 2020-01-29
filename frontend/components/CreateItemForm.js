import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import FormStyles from './styles/FormStyles';
import formatMoney from '../lib/formatMoney';

class CreateItemForm extends Component {
	state = {
		title       : 'Peluche Mélofée',
		description : 'Cette peluche porte chance',
		image       : '',
		largeImage  : '',
		price       : 1500
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	handleChange = (event) => {
		const { name, type, value } = event.currentTarget;
		const valueInput = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: valueInput }); // computed value property
	};

	render() {
		return (
			<FormStyles onSubmit={this.handleSubmit}>
				<h2>Comment pouvez-vous rendre la conduite plus agréable ?</h2>
				<fieldset>
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
		);
	}
}

export default CreateItemForm;
export { CREATE_ITEM_MUTATION };
