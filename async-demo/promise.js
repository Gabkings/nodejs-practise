const p = new Promise((resolve,reject) =>{
	//resolve(1)//called on success
	reject(new new Error("Message"))//called on failure
})

p
	.then(result => console.log("Result: ",result))
	.catch(err => console.log("Error: ", err.message))

 