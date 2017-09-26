//TDD Test driver developer

const lowercaser = require('../lowercaser'); //llamar archivos puclicos de un directorio

test('lowercaser deberia retornar una string en lowercase', ()=>{
	const actual = 'LOREM IPSUM'
	const expected = 'lorem ipsum'
	expect(lowercaser(actual)).toBe(expected)
})
test('Deberia fallar cuando se ingresa un numero', () =>{
	const actual = 1;
	expect(() => {
		lowercaser(actual)
	}).toThrow
})