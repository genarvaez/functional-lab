const applyDiscountTest = require('../applyDiscount')



test('Should return an array', () =>{
	const actual = [{}];
	const discount = Math.random();
	expect(Array.isArray(applyDiscountTest(actual,discount))).toBe(true)
})
test('Should be the same length from input to output', () =>{
	const actual =  [{}];
	const discount = Math.random();
	expect(actual.length).toEqual(applyDiscountTest(actual, discount).length)
})
test('Should be the same length from input to output', () =>{
	const actual =  [{}];
	const discount = Math.random();
	expect(actual).toEqual(actual)
})
