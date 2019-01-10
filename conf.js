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

conf.db.url = process.env.NODE_ENV === "production" ? `mongodb://dev:dev@tweb-te2-shard-00-00-rl5i0.mongodb.net:27017,tweb-te2-shard-00-01-rl5i0.mongodb.net:27017,tweb-te2-shard-00-02-rl5i0.mongodb.net:27017/test?ssl=true&replicaSet=TWEB-TE2-shard-0&authSource=admin&retryWrites=true` : `mongodb://${conf.db.usr}:${conf.db.pwd}@${conf.db.host}:${conf.db.port}/${conf.db.name}`

exports.default = conf
