import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import styled from 'styled-components';

class Item extends Component {
	static propTypes = {
		item : PropTypes.object.isRequired
	};

	render() {
		const { item } = this.props;
		return (
			<ItemStyles>
				{item.image ? <img src={item.image} alt={item.title} /> : null}
				<Title>
					<Link
						href={{
							pathname : '/item',
							query    : { id: item.id } // add librairies later to custom the query for better SEO
						}}
					>
						<a>{item.title}</a>
					</Link>
				</Title>
				<PriceTag>{formatMoney(item.price)}</PriceTag>
				<p>{item.description}</p>
				<div className="buttonList">
					<Link
						href={{
							pathname : 'update',
							query    : { id: item.id }
						}}
					>
						<a>Modifier quantité &#9997;</a>
					</Link>
					<button>Ajouter au panier &#128722;</button>
					<button>Retirer du panier &#10060;</button>
				</div>
			</ItemStyles>
		);
	}
}

export default Item;
