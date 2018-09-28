
const handleFetchRequest = (req,res,db)=>{
	const request_route = req.url;
	const request_url = request_route.substr(1);

 	db.select('*').from('entries').where({short_url: request_url})
	.then(entry => {
		const answer = entry.long_url;
		if(entry.length)
			res.redirect(entry[0].long_url);
		else
			res.status(404).json(`Seems you're lost`);
	})
	.catch(err => res.status(404).json('Something is wrong'));
}

module.exports={
	handleFetchRequest: handleFetchRequest
};