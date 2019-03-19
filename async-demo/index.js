console.log("Before")
getUser(1,(user)=>{
	console.log("User",user)
	readRepos(user.gitHunUsername,(repos) => {
		console.log("Repos",repos)
	})

})
console.log("Before")

function getUser(id,callback){
	setTimeout(()=>{
		console.log("Reading user from database")
		callback({id:id,gitHunUsername:"Mosh"})
	},2000)
}

function readRepos(name,callback){
	setTimeout(()=>{
		console.log("Reading github api")
		callback(['repo1','repo2','repo3','repo3'])

	},2000)
}