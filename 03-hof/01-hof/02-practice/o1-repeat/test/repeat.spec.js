const repeat = require('../repeat')
describe('repeat()', () => {

	test('si repeat recibe num = 3, funcion deberia ejecutar tres veces', () => {
		let iter = 0 //contador de iteraciones
		const num = 3 
		const iter_num = 3
		const fn = () => {
			iter = iter + 1
		}
		repeat(fn, num)
		expect(iter).toBe(iter_num)
	})
})