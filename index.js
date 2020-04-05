const express = require('express');
var proxy = require('html2canvas-proxy');
const app = express();

const port = 5000;

app.use('/', proxy());

// Listen on port 5000
app.listen(port, () => {
	console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});
