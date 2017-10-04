

function repeat(operation, num) {
  // TÚ SOLUCIÓN AQUÍ
  for(var i = 0; i < num; i++){
  	operation()
  }
}

function repeat2(fn, num){
	if(num === 0){
		return
	}
	fn()
	return repeat2(fn, num-1)
}

// No borres la línea de abajo
module.exports = repeat;



/*
const grace = {
  userId: 'xxx',
  name: 'Grace Hopper',
  country: 'us',
  date: new Date()
};

const serializeUser = user => {
	const newUser = Object.assign({}, user)
  newUser.name = (user.name.length > 10) ? `${user.name.slice(0, 7)}...` : user.name;
  user.date = user.date.toJSON();
  console.log(user)
  return JSON.stringify(newUser);
  
};

serializeUser(grace)
*/

