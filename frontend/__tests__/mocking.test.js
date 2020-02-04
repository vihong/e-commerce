describe('mocking learning', () => {
	it('mocks a reg function', () => {
		const fetchDogs = jest.fn();
		fetchDogs('arras');
		expect(fetchDogs).toHaveBeenCalled();
		expect(fetchDogs).toHaveBeenCalledWith('arras');
		fetchDogs();
		expect(fetchDogs).toHaveBeenCalledTimes(2);
	});
});
