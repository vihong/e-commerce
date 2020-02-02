import Link from 'next/link';
import UpdateItemForm from '../components/UpdateItemForm';

const Sell = ({ query }) => {
	return (
		<div>
			<UpdateItemForm id={query.id} />
		</div>
	);
};

export default Sell;
