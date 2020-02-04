import formatMoney from '../lib/formatMoney';

describe('formatMoney Function', () => {
	it('works with euro decimals', () => {
		expect(formatMoney(1)).toEqual('€0.01');
		expect(formatMoney(2)).toEqual('€0.02');
		expect(formatMoney(10)).toEqual('€0.10');
		expect(formatMoney(11)).toEqual('€0.11');
		expect(formatMoney(40)).toEqual('€0.40');
	});

	it('works with integers and add commas', () => {
		expect(formatMoney(5000)).toEqual('€50');
		expect(formatMoney(100)).toEqual('€1');
		expect(formatMoney(50000000)).toEqual('€500,000');
	});

	it('works with integers and decimals', () => {
		expect(formatMoney(5012)).toEqual('€50.12');
		expect(formatMoney(101)).toEqual('€1.01');
		expect(formatMoney(110)).toEqual('€1.10');
		expect(formatMoney(45678909876543456789)).toEqual(
			'€456,789,098,765,434,560.00'
		);
	});
});
