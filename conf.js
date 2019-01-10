const conf = {
	db: {
		port: "27017",
		host: "mongodb",
		name: "te2tweb",
		usr: "dev",
		pwd: "dev",
		reconnectTries: 10,
		reconnectInterval: 500
	},
	secret: "undyingandeverlastingfurnaces"
}

conf.db.url = `mongodb://dev:dev@tweb-te2-shard-00-00-rl5i0.mongodb.net:27017,tweb-te2-shard-00-01-rl5i0.mongodb.net:27017,tweb-te2-shard-00-02-rl5i0.mongodb.net:27017/tweb?ssl=true&replicaSet=TWEB-TE2-shard-0&authSource=admin&retryWrites=true`

exports.default = conf
