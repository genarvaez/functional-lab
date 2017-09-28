const applyDiscountTest = require('../applyDiscount')



test('Should return an array', () =>{
	const actual = [{p: 1}, {p: 2}, {p: 3}, {p: 4}];
	const discount = 0.4;
	expect(Array.isArray(applyDiscountTest(actual,discount))).toBe(true)
})
test('Should be the same length from input to output', () =>{
	const actual =  [{p: 1}, {p: 2}, {p: 3}, {p: 4}];
	const discount = Math.random();
	expect(actual.length).toEqual(applyDiscountTest(actual, discount).length)
})
test('Input dont changes', () =>{
	const actual =  [{price: 1}, {price: 2}, {price: 3}, {price: 4}];
	const discount = 3;
	expect(actual).toBeCalledWith(expect.anything())
})