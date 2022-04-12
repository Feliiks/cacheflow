const express = require('express');
const app = express();
const db = require('../database/index.js');
const port = 3000;
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({ limit: '500mb', extended: true, parameterLimit: 50000 }));
app.use(express.json({ limit: '500mb' }))
app.use(express.static('frontend/public'));



app.get('/test', async (req, res) => {

	res.send('response to get request!')

	// db.query(
	// 	'SELECT * FROM homes',
	// 	(error, results) => {
	// 		if (error) {
	// 			console.log(error);
	// 		}
	// 		else {
	// 			res.send(results);
	// 		}

	// 	}
	// );
});

// app.post('/sfHomes/homes', async (req, res) => {

// 	let data = JSON.stringify(req.body)

// 	const dataArr = data.substr(2, data.length - 7).split('\r\n')[0].split('\\r\\n');

// 	const values = [];

// 	for (let row of dataArr)  {

// 		row = row.split(',')

// 		if (row.length === 27) {
// 			values.push(row);
// 		}
// 	}

// 	values.shift();

// 	let valuesString = JSON.stringify(values);

// 	valuesString = valuesString.replace(/\[/g, '(').replace(/\]/g, ')').replace('("")', '');

// 	valuesString = valuesString.substr(1, valuesString.length - 2);

// 	if (valuesString.length) {

// 		db.query(
// 			`${queryString} ${valuesString}`,
// 			(error, results) => {
// 				if (error) {
// 					console.log(error);
// 				}
// 				else {
// 					res.send(results);
// 				}
// 			}
// 		);
// 	}
// });

// app.get('/sfHomes/search/:term', async (req, res) => {

// 	const term = req.params.term.toString();
// 	const query = `SELECT * FROM homes WHERE address LIKE CONCAT('%', '${term}', '%')`

// 	db.query(
// 		query,
// 		(error, results) => {
// 			if (error) {
// 				console.log(error);
// 			}
// 			else {
// 				res.send(results);
// 			}
// 		}
// 	);
// });

module.exports = app.listen(port, () => console.log(`listening on port ${port}!`));
