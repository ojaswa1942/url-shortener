const randomstring = require("randomstring");
const isUrl = require("is-url");

const handleRegister = ( req, res, db ) => {
	const url = 'https://url.ojaswa.com/'
	const {input} = req.body;
	if(!isUrl(input)){
		return res.status(400).json({result_status: false});
	}
	console.log('hey');
	const QUERY_TEXT = `INSERT INTO entries(long_url, short_url, date) VALUES($1, $2, $3) RETURNING short_url`

	return db.query(QUERY_TEXT, [ input, randomstring.generate(6), new Date() ])
	.then(({rows}) => {
		res.status(200).json({
			result_status: true,
			result: url+rows[0].short_url
		})
	})	
	.catch(err=> res.status(400).json(err))
}

module.exports = {
	handleRegister
};