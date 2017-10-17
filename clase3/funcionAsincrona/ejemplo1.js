const request = require('request')
function hola (){
	return new Promise((resolve, reject) => {
		request('http://www.google.com', function(err, res){
			if(err){
				return reject(err)
			}

			resolve(res)
		})

	})
}
hola()
.then((response) =>{
	console.log(response)
})
.catch(err => {
	console.log(err)
})