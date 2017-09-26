//funciones puras


/*function lowercaser (input){
	return input.toLowerCase()
}*/


//Lowercaser recibe un input recibe input y lo tranforma

const lowercaser = (input) => {
	if(typeof input !== "string"){
		throw ('input is not a valid string')
	}

	return input.toLowerCase() //si es una sola linea no es necesario poner llaves y return
}

module.exports = lowercaser //hace publico o accesible al scope