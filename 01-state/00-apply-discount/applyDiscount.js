
const applyDiscount = (cart, realDiscount) => {
	if (!cart.length) {
    return [];
	}
	let newObj; // fuera del map para no generar un espacio (var) en memoria con cada iteracion
    const current = cart.map( e =>{
  	    newObj = Object.assign({}, e)
        return newObj
    })
    const newPrice = current.map(e => {e.price *= (1 - realDiscount)
    return e
    })
  
    return newPrice
};

module.exports = applyDiscount