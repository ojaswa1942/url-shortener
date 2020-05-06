const handleFetchRequest = ( req, res, db ) => {
	const request_route = req.url;
	const request_url = request_route.substr(1);

	const QUERY_TEXT = `SELECT * FROM ENTRIES WHERE short_url = $1`;
	return db.query(QUERY_TEXT, [request_url])
	.then(({ rows }) => {
		if(rows.length)
			res.redirect(rows[0].long_url);
		else
			res.status(404).json(`Seems you're lost`);
	})
	.catch(err => res.status(404).json('Something is wrong'));
}

module.exports = {
	handleFetchRequest
};