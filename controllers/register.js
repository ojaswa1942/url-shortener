const randomstring = require("randomstring");
const isUrl = require("is-url");

const handleRegister = (req,res,db)=>{
	//(db, bcrypt) => (req, res) =>
	const url = 'http://localhost:3002/'
	const {input} = req.body;
	if(!isUrl(input)){
		return res.status(400).json({result_status: false});
	}
	db.insert({
		long_url: input,
		short_url: randomstring.generate(6),
		date: new Date()
	}).into('entries')
	.returning('short_url')
	.then(short_url =>{
		res.status(200).json({
			result_status: true,
			result: url+short_url
		})
	})	
	.catch(err=> res.status(400).json(err))	
}

module.exports={
	handleRegister: handleRegister
};