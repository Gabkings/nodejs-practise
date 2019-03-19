function log(req,res,next){
	console.log("Logging the message ...")
	next()
}

module.exports = log