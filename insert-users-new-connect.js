/*
Insert configuration to config file, information can be found in heroku dashboard (heroku postgres / database credentials)
PG_CONFIG: {
	user: 'insert user here',
	database: 'insert database here',
	password: 'insert password here',
	host: 'insert host here',
	port: 5432,
	max: 10,
	idleTimeoutMillis: 30000,
},
*/
var pool = new pg.Pool(config.PG_CONFIG);
pool.connect(function(err, client, done) {
	if (err) {
		return console.error('Error acquiring client', err.stack);
	}
	var rows = [];
	console.log('fetching user');
	client.query(`SELECT id FROM users WHERE fb_id='${userId}' LIMIT 1`,
		function(err, result) {
			console.log('query result ' + result);
			if (err) {
				console.log('Query error: ' + err);
			} else {
				console.log('rows: ' + result.rows.length);
				if (result.rows.length === 0) {
					let sql = 'INSERT INTO users (fb_id, first_name, last_name, profile_pic, ' +
						'locale, timezone, gender) VALUES ($1, $2, $3, $4, $5, $6, $7)';
					console.log('sql: ' + sql);
					client.query(sql,
						[
							userId,
							user.first_name,
							user.last_name,
							user.profile_pic,
							user.locale,
							user.timezone,
							user.gender
						]);
				}
			}
		});

});
pool.end();
